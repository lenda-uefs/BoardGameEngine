var GameConfig = {};
var GameStatus = {};
var GameJson = {};

var currentPlayerIndex = -1;
var currentActionIndex = -1;
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
  GameConfig.nextPlayerIndex =
    (GameJson.gameFlow.rules.turnOptions.playerOrder == "staticOrder") ?
      nextPlayerIndex : GameJson.gameFlow.rules.turnOptions.nextPlayerFcn;

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
      let tokenId = parseInt(command.slice(0, command.indexOf('&')));
      let selectedToken = GameStatus.playerStatus[ownerId].tokens[tokenId];
      nextAction(GameStatus);
      alert(ownerId + " " + selectedToken.positionId);
      break;
    case "select-position":
      break;
    case "standby":
      if (command.includes("rollDice")) {
        var player = GameStatus.playerStatus[GameStatus.currentPlayerId];
        player.diceValue = rollDice();
        GameStatus.gameEvents.diceEvent(GameStatus, player.diceValue);
        nextAction(GameStatus);
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
    GameStatus.previousPlayerId = GameStatus.currentPlayerId;
    GameStatus.currentPlayerId = GameConfig.playerIdList[
      currentPlayerIndex = GameConfig.nextPlayerIndex(currentPlayerIndex, GameConfig)];

    nextAction(GameStatus);

    // Chama o evento de fim de turno
    GameStatus.gameEvents.endTurn(GameStatus);

    console.log(GameStatus.currentPlayerId + " " +GameStatus.currentAction.actionType + " "
      + currentPlayerIndex);
  } else {
    GameStatus.statusId =
      (GameStatus.currentAction.actionType == "selectToken")? "select-token":(
      (GameStatus.currentAction.actionType == "selectPosition")? "select-position": "standby");
  }

  return GameStatus.currentAction;
}

function nextPlayerIndex(currentPlayerIndex, GameConfig) {
  currentPlayerIndex = (currentPlayerIndex == GameConfig.playerCount - 1)? 0 : currentPlayerIndex+1;
  return currentPlayerIndex;
}

function nextActionIndex(currentActionIndex, GameConfig) {
  currentActionIndex = (currentActionIndex == GameStatus.actions.lenght - 1)? 0 : currentActionIndex+1;
  return currentActionIndex;
}

function clearGameStatus(){
	GameStatus.statusId = "";	// estado atual
	GameStatus.message = "";  // mensagem atual
	GameStatus.actions = [];  // ação/ações atual
  GameStatus.currentPlayerId = "";//GameConfig.playerIdList[nextPlayerIndex()];
  GameStatus.previousPlayerId = "";
  GameStatus.elapsedTurns = 0;
  GameStatus.actionQueue = [];
}
