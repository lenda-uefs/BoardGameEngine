var GameConfig = {};
var GameStatus = {};
var GameJson = {};

var steps = 0;
var defaultActionLabels = {
  rollDice:"Roll Dice",
  selectPosition:"Select Position",
  selectToken:"Select Token",
  endTurn: "End Turn"
};

exports.boardGameList = ["Ludo.js"];

exports.setGameConfig = function (gamePath) {
  GameJson = require(gamePath).boardGame;

  GameConfig.gameId = GameJson.id;

  // Player config
  GameConfig.playerCount = GameJson.gameData.playerOptions.playerCount;
  GameConfig.playerIdList = GameJson.gameData.playerOptions.playerId;
  GameConfig.playerAttributeImg = [];
  GameConfig.playerAttributeDesc = [];
  if (GameJson.gameData.playerOptions.playerAttributes !== undefined) { // Feature não mandatoria
    GameJson.gameData.playerOptions.playerAttributes.forEach(function(playerAttribute){
      if (playerAttribute.image !== undefined)
        GameConfig.playerAttributeImg[playerAttribute.name] = playerAttribute.image;

      if (playerAttribute.description !== undefined)
        GameConfig.playerAttributeDesc[playerAttribute.name] = playerAttribute.description;
    });
  }

  // Board Config
  GameConfig.boardBackground = GameJson.gameData.board.background;
  GameConfig.boardType = GameJson.gameData.board.boardType;

  // Component Config
  GameConfig.tokenImg = [];
  GameConfig.tokenDescription = [];
  GameJson.gameData.component.tokens.forEach(function(token) {
    GameConfig.tokenImg[token.tokenType] = token.tokenImage;
    if (token.tokenDescription !== undefined)
      GameConfig.tokenDescription[token.tokenType] = token.tokenDescription;
  });

  // Dice config
  GameConfig.dice = (GameJson.gameData.component.dice !== undefined) ? GameJson.gameData.component.dice : {};

  // Turn Config
  GameConfig.maxTurnCount = GameJson.gameFlow.rules.turnOptions.maxTurnCount;
  GameConfig.nextPlayerId =
    (GameJson.gameFlow.rules.turnOptions.playerOrder == "staticOrder") ?
      nextPlayerId : GameJson.gameFlow.rules.turnOptions.playerOrder.dynamicOrder;

  // Movement Config
  GameConfig.movementRule = GameJson.gameFlow.rules.movement;

  // Conditions to win/lose
  GameConfig.conditionsToWin = GameJson.gameFlow.rules.conditionsToWin;
  GameConfig.conditionsToLose = GameJson.gameFlow.rules.conditionsToLose;
}

exports.getGameConfig = function(config){
	try {
		return GameConfig[config];
	}
	catch (err) {
		console.log(err.message);
	}
}

exports.startGameStatus = function(){
  clearGameStatus();

  // Ações
  GameStatus.actions = {};
  GameStatus.defaultActionQueue = GameJson.gameFlow.rules.turnOptions.actionQueue;
  let actions = GameJson.gameFlow.actions;
  actions.forEach(function (action){
    if (action.actionLabel === undefined)
      action.actionLabel = defaultActionLabels[action.actionType];

    GameStatus.actions[action.actionType] = action;
  });

  // Status relacionados ao tabuleiro
  GameStatus.boardPositionList = GameJson.gameData.board.positions;

  // Eventos do jogo
  GameStatus.gameEvents = GameJson.gameFlow.gameEvents;

  // Player Attributes
  GameStatus.playerStatus = [];
  for (i = 0; i < GameConfig.playerCount; i++) {
    var player = {};
    player.id = GameConfig.playerIdList[i];
    player.diceValue = 0;
    player.tokens = [];
    player.selectedTokens = [];

    if (GameJson.gameData.playerOptions.playerAttributes !== undefined) {
      player.attributes = {};
      GameJson.gameData.playerOptions.playerAttributes.forEach(function(playerAttribute){
        player.attributes[playerAttribute.name] = playerAttribute.value;
      });
    }

    GameStatus.playerStatus[GameConfig.playerIdList[i]] = player;
  }

  GameJson.gameData.component.tokens.forEach(function(token){
    token.isSelected = false;
    GameStatus.playerStatus[token.ownerId].tokens.push(token);
  });

  nextAction(GameStatus);
}

exports.getGameStatus = function(status){
	try {
		return GameStatus[status];
	}
	catch (err) {
		console.log(err.message);
	}
}

exports.updateGameStatus = function (command) {
  switch (GameStatus.statusId) {
    case "select-token":
      let ownerId = command.slice(command.indexOf('&')+1);
      if (ownerId != GameStatus.currentPlayer.id) break;
      let tokenId = parseInt(command.slice(0, command.indexOf('&')));
      let selectedToken = GameStatus.playerStatus[ownerId].tokens[tokenId];
      GameStatus.playerStatus[ownerId].selectedTokens.push(selectedToken);

      console.log(ownerId + " " + selectedToken.positionId);
      nextAction(GameStatus);
      break;
    case "select-position":
      break;
    case "standby":
      if (command.includes("rollDice")) {
        var player = GameStatus.playerStatus[GameStatus.currentPlayer.id];
        player.diceValue = rollDice();
        GameStatus.gameEvents.diceEvent(GameStatus, player.diceValue);
        nextAction(GameStatus);
      }
      break;
    case "moving":
      let selectedTokens = GameStatus.currentPlayer.selectedTokens;

      if (GameConfig.movementRule) {

      }

      break;
  }
}

function rollDice() {
  var dice = GameConfig.dice[0];
  if (dice.dieType == "nSidedDie")
    return 1 + Math.floor(Math.random() * dice.numberOfSides);
  else
    return dice.valueSet[Math.floor(Math.random() * dice.valueSet.length)];
}

function nextAction(GameStatus) {
  GameStatus.currentAction = GameStatus.actions[GameStatus.actionQueue.shift()];

  // Acabou o turno
  if (GameStatus.currentAction === undefined) {
    // Incrementa o contador de turnos
    GameStatus.elapsedTurns++;

    // Incrementa o turno atual
    GameStatus.currentTurn = GameStatus.elapsedTurns + 1;

    // Pega a fila de ações default
    GameStatus.actionQueue = GameStatus.defaultActionQueue.slice();

    // Atualiza o player atual
    GameStatus.previousPlayer = GameStatus.currentPlayer;
    GameStatus.currentPlayer = GameStatus.playerStatus[
      GameConfig.nextPlayerId(GameConfig, GameStatus.currentPlayer)];

    // Limpando estados relevantes
    if (GameStatus.previousPlayer != "")
      GameStatus.previousPlayer.selectedTokens = [];
    GameStatus.message = "";

    nextAction(GameStatus);

    // Chama o evento de fim de turno
    GameStatus.gameEvents.endTurn(GameStatus);

    console.log(GameStatus.currentPlayer.id + " " +GameStatus.currentAction.actionType + " "
      + GameStatus.elapsedTurns + " " + GameStatus.currentTurn);
  } else {
    GameStatus.statusId =
      (GameStatus.currentAction.actionType == "selectToken")? "select-token":(
      (GameStatus.currentAction.actionType == "selectPosition")? "select-position": "standby");
  }

  return GameStatus.currentAction;
}

function nextPlayerId(GameConfig, currentPlayer) {
  let currentPlayerIndex = GameConfig.playerIdList.indexOf(currentPlayer.id);
  currentPlayerIndex = (currentPlayerIndex == GameConfig.playerCount - 1)? 0 : currentPlayerIndex+1;
  console.log(currentPlayerIndex);
  return GameConfig.playerIdList[currentPlayerIndex];
}

function pathSelector(GameStatus, selectedToken) {

}

function clearGameStatus(){
	GameStatus.statusId = "";	// estado atual
	GameStatus.message = "";  // mensagem atual
	GameStatus.actions = [];  // ação/ações atual
  GameStatus.currentPlayer = {id:""};//GameConfig.playerIdList[nextPlayerIndex()];
  GameStatus.previousPlayer = {id:""};
  GameStatus.elapsedTurns = -1;
  GameStatus.actionQueue = [];
}
