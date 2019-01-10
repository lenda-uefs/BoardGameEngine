var GameConfig = {};
var GameStatus = {};
var GameJson = {};

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
    console.log("playerAttributes === undefined");
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

  //console.log(GameConfig);
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

  GameStatus.playerStatus = [];
  // Player Attributes
  for (i = 0; i < GameConfig.playerCount; i++) {
    var player = {};
    player.id = GameConfig.playerIdList[i];
    player.tokens = [];

    if (GameJson.gameData.playerOptions.playerAttributes !== undefined) {
      GameJson.gameData.playerOptions.playerAttributes.forEach(function(playerAttribute){
        player[playerAttribute.name] = playerAttribute.value;
      });
    }

    GameStatus.playerStatus[GameConfig.playerIdList[i]] = player;
  }

  GameJson.gameData.component.tokens.forEach(function(token){
    GameStatus.playerStatus[token.ownerId].tokens.push(token);
  });
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
