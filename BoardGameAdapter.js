var GameConfig = {};
var GameStatus = {};
var GameJson = {};

// TODO: povoar o GameConfig com o arquivo js do jogo

exports.setGameConfig = function (gamePath) {
  GameJson = require(gamePath);

  GameConfig.gameId = GameJson.id;
  GameConfig.playerCount = GameJson.gameData.playerOptions.playerCount;
  GameConfig.playerIdList = GameJson.gameData.playerOptions.playerId;

  GameConfig.boardBackground = GameJson.gameData.board.background;
  GameConfig.boardType = GameJson.gameData.board.boardType;
  //GameConfig.boardPositionList = GameJson.gameData.board;

  console.log(GameConfig);
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
  GameStatus.boardPositionList = GameJson.gameData.board.positions;

  GameStatus.playerStatus = {};
  for (i = 0; i < GameJson.playerCount; i++) {
    GameStatus.playerStatus[GameConfig.playerIdList[i]] = {};
  }
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

//exports.startGameStatus = function ()

// Helper functions

exports.getComponentByOwnerId = function (ownerId) {
  var components = GameConfig.boardGame.gameData.component;
}
