var GameConfig = {};
var GameStatus = {};
var GameJson = {};

var currentPlayerIndex = -1;
var currentActionIndex = -1;
var elapsedTurns = 0;
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
  GameConfig.defaultActionQueue = GameJson.gameFlow.rules.turnOptions.actionQueue;

  // Conditions to win/lose
  GameConfig.conditionsToWin = GameJson.gameFlow.rules.conditionsToWin;
  GameConfig.conditionsToLose = GameJson.gameFlow.rules.conditionsToLose;

  // Actions config
  GameConfig.actions = {};
  let actions = GameJson.gameFlow.actions;
  actions.forEach(function (action){
    if (action.actionLabel === undefined)
      action.actionLabel = defaultActionLabels[action.actionType];

    GameConfig.actions[action.actionType] = action;
  });

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

  // Status relacionados ao tabuleiro
  GameStatus.boardPositionList = GameJson.gameData.board.positions;

  // Fila de ações
  GameStatus.actionQueue = GameConfig.defaultActionQueue;

  // Player Attributes
  GameStatus.playerStatus = [];
  for (i = 0; i < GameConfig.playerCount; i++) {
    var player = {};
    player.id = GameConfig.playerIdList[i];
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
    GameStatus.playerStatus[token.ownerId].tokens.push(token);
  });

  // player atual
  GameStatus.currentPlayerId = GameConfig.playerIdList[
    GameConfig.nextPlayerIndex(currentPlayerIndex, GameConfig)];

  // Ação atual;
  GameStatus.currentAction = GameConfig.actions[GameStatus.actionQueue.shift()];

  // Turno atual
  GameStatus.currentTurn = elapsedTurns + 1;
}

exports.getGameStatus = function(status){
	try {
		return GameStatus[status];
	}
	catch (err) {
		console.log(err.message);
	}
}

exports.move = function(token) {
  var res = rollDice();
  GameStatus.message = "You rolled a " + res + '!';
  var positions = GameConfig.gameData.board.positions;
  var currentPosId = token.positionId;
  var currentPos = positions[currentPosId];

  var nextId;
  for (var i = 0; i < res; i++) {
    nextId = currentPos.next[0];
    if (positions[nextId].next[0] === undefined) break;

    currentPos = positions[nextId];
  }

}

exports.checkGoal = function() {

}

function rollDice() {
  var dice = GameConfig.gameData.component.dice[0];
  if (dice.dieType == "nSidedDie") {
    return 1 + Math.floor(Math.random() * (dice.numberOfSides - 1));
  }
}

function nextPlayerIndex(currentPlayerIndex, GameConfig) {
  currentPlayerIndex = (currentPlayerIndex == GameConfig.playerCount - 1)? 0 : currentPlayerIndex+1;
  return currentPlayerIndex;
}

function nextActionIndex(currentActionIndex, GameConfig) {
  currentActionIndex = (currentActionIndex == GameConfig.actions.lenght - 1)? 0 : currentActionIndex+1;
  return currentActionIndex;
}

function clearGameStatus(){
	GameStatus.statusId = "";	// estado atual
	GameStatus.message = "";  // mensagem atual
	GameStatus.actions = [];  // ação/ações atual
  GameStatus.currentPlayerId = "";//GameConfig.playerIdList[nextPlayerIndex()];
}
