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
    GameJson.gameData.playerOptions.playerAttributes.forEach(function(playerAttribute){
      if (!playerAttribute.visible) return;
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
  let movementRule = GameJson.gameFlow.rules.movement;
  GameConfig.evaluatePosition = (movementRule.positionSelectRule)?
    movementRule.positionSelectRule : evaluatePositionDefault;

  if (movementRule.branchRule == "manual") {
    GameConfig.evaluateMovement = function(GameStatus, selectedToken){console.log("Placeholder");};
  } else if (typeof movementRule.branchRule === 'function') {
    GameConfig.evaluateMovement = movementRule.branchRule;
  } else {
    GameConfig.evaluateMovement = (GameConfig.boardType == "point-to-point")?
      rnmEvaluateMovement : gridEvaluateMovement;
  }

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

exports.setUpdateCallback = function(updateCallback) {
  GameStatus.updateCallback = updateCallback;
}

exports.startGameStatus = function(){
  clearGameStatus();

  // Ações
  GameStatus.defaultActionQueue = GameJson.gameFlow.rules.turnOptions.actionQueue;
  let actions = GameJson.gameFlow.actions;
  actions.forEach(function (action){
    if (action.actionLabel !== undefined)
      GameStatus.actions[action.actionType] = action;
  });

  // Posições
  GameStatus.boardPositionList = GameJson.gameData.board.positions;
  if (GameConfig.boardType == "point-to-point")
    GameStatus.boardPositionList.forEach(function (position, id){
      position.tokens = [];

      for (let i = 0; i < position.prev.length; i++) {
        position.prev[i] = GameStatus.boardPositionList[position.prev[i]];
      }

      for (let i = 0; i < position.next.length; i++) {
        position.next[i] = GameStatus.boardPositionList[position.next[i]];
      }
    });

  // Eventos do jogo
  GameStatus.gameEvents = GameJson.gameFlow.gameEvents;

  // Player Attributes
  GameStatus.playerStatus = [];
  for (i = 0; i < GameConfig.playerCount; i++) {
    var player = {};
    player.id = GameConfig.playerIdList[i];
    player.diceValue = 0;
    player.tokens = {};
    player.selectedToken = null;
    player.selectedPosition = null;

    if (GameJson.gameData.playerOptions.playerAttributes !== undefined) {
      player.attributes = {};
      GameJson.gameData.playerOptions.playerAttributes.forEach(function(playerAttribute){
        player.attributes[playerAttribute.name] = Array.isArray(playerAttribute.value)?
          playerAttribute.value.slice() : playerAttribute.value;
      });
    }

    player.removeToken = function (token) {
      if (this.tokens[token.id]) delete this.tokens[token.id];
    }

    player.getTokenCount = function (tokenType){
      let tokenCount = 0;
      if (tokenType) {
        for (let tokenId in this.tokens) {
          if (this.tokens.hasOwnProperty(tokenId) &&
            this.tokens[tokenId].tokenType == tokenType)
            tokenCount++;
        }
      } else tokenCount = Object.getOwnPropertyNames(this.tokens).length;

      return tokenCount;
    }

    GameStatus.playerStatus[GameConfig.playerIdList[i]] = player;
  }

  GameJson.gameData.component.tokens.forEach(function(token, index){
    // Cria um id pro token
    token.id = token.ownerId + index;

    // Inicializa com uma posilção qualquer
    token.position = GameStatus.boardPositionList[0];

    // Definie uma função para atualizar a posição do token
    token.setPosition = function (position){
      let index = this.position.tokens.map(function (tk){return tk.id}).indexOf(this.id);
      if (index > -1) this.position.tokens.splice(index, 1);
      this.position = position;
      this.positionId = position.positionId;
      this.position.tokens.push(this);
    };

    // Atualiza a posição do token de acordo com o positionId
    token.setPosition(GameStatus.boardPositionList[token.positionId]);

    // Armazena a posição original do token
    token.originalPosition = token.position;

    // Função para resetar a posição original do token;
    token.resetPositionGame = function () {
      this.setPosition(this.originalPosition);
    }

    // Handle para armazenar a posição do token no início de um turno
    token.startPosition = null;

    token.resetPositionTurn = function () {
      this.setPosition(this.startPosition);
    }

    // Adiciona o token na lista do jogador
    GameStatus.playerStatus[token.ownerId].tokens[token.id] = token;
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
      let tokenId = command.slice(0, command.indexOf('&'));
      GameStatus.currentPlayer.selectedToken =
        GameStatus.currentPlayer.tokens[tokenId];
      console.log(ownerId + " " + tokenId);
      // console.log(GameStatus.currentPlayer.tokens);
      // console.log(GameStatus.currentPlayer.selectedToken);
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
      } else if (command.includes("endTurn") || command.includes("displayMessage")) {
        nextAction(GameStatus);
      }
      break;
    case "moving":
      // 1 Pega a posição valida
      // 2 incrementa o step
      // 3 chama o land ou o passing de acordo com o criteiro
      let token = GameStatus.currentPlayer.selectedToken;

      // Guarda a posição inicial do turno
      if (GameStatus.steps == 0) token.startPosition = token.position;

      // Seta a próxima posição
      token.setPosition(GameConfig.evaluateMovement(GameStatus));
      //console.log(token.position);

      // incrementa o contador de passos
      GameStatus.steps++;

      // Se não for preciso dar mais passos...
      if (GameConfig.boardType == "grid" ||
        GameStatus.steps == GameStatus.currentPlayer.diceValue){

        // Dispara o evento de parada e chama a proxima ação
        GameStatus.gameEvents.stoppingEvent(GameStatus);
        nextAction(GameStatus);

      } else // Caso contrario, dispara o evento de passagem e continua
        GameStatus.gameEvents.passingEvent(GameStatus);
      break;
  }

  // GameStatus.checkVictoryConditions["update"]();
  // GameStatus.checkDefeatConditions["update"]();

  GameStatus.updateCallback();
  console.log(GameStatus.currentPlayer.getTokenCount());
}

function rollDice() {
  return (GameStatus.currentPlayer.id == "Red")?6:1;
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
    if (GameStatus.previousPlayer.id != ""){

      for (var tokenId in GameStatus.previousPlayer.tokens) {
        if (GameStatus.previousPlayer.tokens.hasOwnProperty(tokenId)) {
          GameStatus.previousPlayer.tokens[tokenId].startPosition = null;
        }
      }
      GameStatus.previousPlayer.selectedToken = null;
    }
    GameStatus.message = "";
    GameStatus.steps = 0;

    nextAction(GameStatus);

    // Chama o evento de fim de turno
    GameStatus.gameEvents.endTurn(GameStatus);
  } else {
    GameStatus.statusId =
      (GameStatus.currentAction.actionType == "selectToken")? "select-token":(
      (GameStatus.currentAction.actionType == "selectPosition")? "select-position": (
      (GameStatus.currentAction.actionType == "moveToken")? "moving":"standby"));

    // if (GameStatus.statusId == "moving") {
    //   exports.updateGameStatus("");
    // }
  }

  return GameStatus.currentAction;
}

function nextPlayerId(GameConfig, currentPlayer) {
  let currentPlayerIndex = GameConfig.playerIdList.indexOf(currentPlayer.id);
  currentPlayerIndex = (currentPlayerIndex == GameConfig.playerCount - 1)? 0 : currentPlayerIndex+1;
  return GameConfig.playerIdList[currentPlayerIndex];
}

// Branch Selector default. Retorna a primeira posição
// adjacente à posição do token atual. (point to point boards)
function rnmEvaluateMovement(GameStatus) {
  return GameStatus.currentPlayer.selectedToken.position.next[0];
}

// Placeholder evaluate movement para
// grid boards.
// Retorna a posição selecionada
// se a posição foi setada em selectedPosition
// então quer dizer que ela é valida.
function gridEvaluateMovement(GameStatus) {
  return GameStatus.currentPlayer.selectedPosition;
}

// Placeholder para avaliar posições selecionadas
// Simplesmente retorna true se a posição for definida.
function evaluatePositionDefault(GameStatus) {
  return (GameStatus.currentPlayer.selectedPosition !== undefined);
}

function clearGameStatus(){
	GameStatus.statusId = "";	// estado atual
	GameStatus.message = "";  // mensagem atual
	GameStatus.actions = [];  // ação/ações atual
  GameStatus.currentPlayer = {id:""};//GameConfig.playerIdList[nextPlayerIndex()];
  GameStatus.previousPlayer = {id:""};
  GameStatus.elapsedTurns = -1;
  GameStatus.actionQueue = [];
  GameStatus.steps = 0;

  GameStatus.setMessage = setMessage;
  GameStatus.endTurn = endTurn;
  GameStatus.actions = {
    rollDice: {actionType: "rollDice", actionLabel: "Roll Dice"},
    selectToken: {actionType: "selectToken", actionLabel: "Select Token"},
    selectPosition: {actionType: "selectPosition", actionLabel: "Select Position"},
    moveToken: {actionType: "moveToken", actionLabel: ""},
    endTurn: {actionType: "endTurn", actionLabel: "End Turn"},
    displayMessage: {actionType: "displayMessage", actionLabel: "Ok"}
  }

  GameStatus.updateCallback = function() {};
  GameStatus.checkVictoryConditions = {};
  GameStatus.checkDefeatConditions = {};
}

function endTurn(message="") {
  if (message != "")
    GameStatus.message = message;
  GameStatus.actionQueue = ["endTurn"];
}

function setMessage(message) {
  if (message != "")
    GameStatus.message = message;
  if (GameStatus.actionQueue.length == 0) {
    GameStatus.actionQueue.push("displayMessage");
  }
}

function isLastRemainingPlayer(player) {
  return GameStatus.playerStatus.length == 1 && GameStatus.playerStatus[player.id];
}

function hasReachedFinishLine(player) {
  return player && player.position && player.position.positionType.includes("finish");
}

// Retorna se a condição de fim de jogo é verdadeira para este jogador
function evaluatePlayerAttributeExact(player, attributeName, value) {
  return player.attributes[attributeName] == value;
}

function evaluateTokenCountExact(player, tokenType, value){
  return player.tokenCount(tokenType) == value;
}

// Retorna uma lista de jogadores em ordem crescente ou decrescente,
// de acordo com o eval option, em relação ao attribute name
// O primeiro da lista satisfaz a condição de fim de jogo
function evaluatePlayerAttribute(playerList, attributeName, evalOption = "highest") {
  var comparator = function (playerA, playerB) {
    return playerA.attributes[attributeName] - playerB.attributes[attributeName];
  }

  return (evalOption == "lowest")? playerList.sort(comparator) : playerList.sort(comparator).reverse();
}

function evaluateTokenCount(playerList, tokenType, evalOption = "highest") {
  var comparator = function (playerA, playerB) {
    return playerA.getTokenCount(tokenType) - playerB.getTokenCount(tokenType);
  }

  return (evalOption == "lowest")? playerList.sort(comparator) : playerList.sort(comparator).reverse();
}
