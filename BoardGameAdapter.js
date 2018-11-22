var GameConfig = {};
var GameStatus = {message:"", endMessage:""};

exports.setGameConfig = function (gamePath) {
  GameConfig = require(gamePath);
  console.log(GameConfig);
}

exports.getGameConfig = function(config){
	try {
		return GameConfig.boardGame[config];
	}
	catch (err) {
		console.log(err.message);
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
