exports.boardGame = {
  id: "Checkers",

  gameData: {
    playerOptions: {
      playerCount: 2,
      playerId: ["Black", "White"],
      playerAttributes: [{
        name: "Captured Tokens",
        value: 0,
        description: "Number of Tokens captured from the opponent.",
        image: "assets/imgs/tokenpile.svg",
        visible:true
      }, {name: "jumping", value: false, description: "", image: "", visible:false}]
    },
    board: {
      background:"assets/imgs/checkers.png",
      boardType: "grid", // point-to-point ou grid
      positions: [
        // De baixo para cima
        // Primeira fileira. Posição inicial das peças brancas
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.908], positionId:0,  positionType:"black", gridIndex: [0,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.908], positionId:1,  positionType:"white", gridIndex: [1,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.908], positionId:2,  positionType:"black", gridIndex: [2,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.908], positionId:3,  positionType:"white", gridIndex: [3,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.908], positionId:4,  positionType:"black", gridIndex: [4,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.908], positionId:5,  positionType:"white", gridIndex: [5,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.908], positionId:6,  positionType:"black", gridIndex: [6,0]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.908], positionId:7,  positionType:"white", gridIndex: [7,0]},

        // Segunda fileira. Posição inicial das peças brancas
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.792], positionId:8,  positionType:"white", gridIndex: [0,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.792], positionId:9,  positionType:"black", gridIndex: [1,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.792], positionId:10,  positionType:"white", gridIndex: [2,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.792], positionId:11,  positionType:"black", gridIndex: [3,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.792], positionId:12,  positionType:"white", gridIndex: [4,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.792], positionId:13,  positionType:"black", gridIndex: [5,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.792], positionId:14,  positionType:"white", gridIndex: [6,1]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.792], positionId:15,  positionType:"black", gridIndex: [7,1]},

        // Terceira fileira.
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.675], positionId:16,  positionType:"black", gridIndex: [0,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.675], positionId:17,  positionType:"white", gridIndex: [1,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.675], positionId:18,  positionType:"black", gridIndex: [2,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.675], positionId:19,  positionType:"white", gridIndex: [3,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.675], positionId:20,  positionType:"black", gridIndex: [4,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.675], positionId:21,  positionType:"white", gridIndex: [5,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.675], positionId:22,  positionType:"black", gridIndex: [6,2]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.675], positionId:23,  positionType:"white", gridIndex: [7,2]},

        // Quarta fileira.
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.558], positionId:24,  positionType:"white", gridIndex: [0,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.558], positionId:25,  positionType:"black", gridIndex: [1,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.558], positionId:26,  positionType:"white", gridIndex: [2,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.558], positionId:27,  positionType:"black", gridIndex: [3,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.558], positionId:28,  positionType:"white", gridIndex: [4,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.558], positionId:29,  positionType:"black", gridIndex: [5,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.558], positionId:30,  positionType:"white", gridIndex: [6,3]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.558], positionId:31,  positionType:"black", gridIndex: [7,3]},

        // Quinta fileira.
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.442], positionId:32,  positionType:"black", gridIndex: [0,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.442], positionId:33,  positionType:"white", gridIndex: [1,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.442], positionId:34,  positionType:"black", gridIndex: [2,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.442], positionId:35,  positionType:"white", gridIndex: [3,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.442], positionId:36,  positionType:"black", gridIndex: [4,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.442], positionId:37,  positionType:"white", gridIndex: [5,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.442], positionId:38,  positionType:"black", gridIndex: [6,4]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.442], positionId:39,  positionType:"white", gridIndex: [7,4]},

        // Sexta fileira.
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.325], positionId:40,  positionType:"white", gridIndex: [0,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.325], positionId:41,  positionType:"black", gridIndex: [1,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.325], positionId:42,  positionType:"white", gridIndex: [2,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.325], positionId:43,  positionType:"black", gridIndex: [3,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.325], positionId:44,  positionType:"white", gridIndex: [4,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.325], positionId:45,  positionType:"black", gridIndex: [5,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.325], positionId:46,  positionType:"white", gridIndex: [6,5]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.325], positionId:47,  positionType:"black", gridIndex: [7,5]},

        // Sétima fileira. Posição inicial das peças pretas.
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.208], positionId:48,  positionType:"black", gridIndex: [0,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.208], positionId:49,  positionType:"white", gridIndex: [1,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.208], positionId:50,  positionType:"black", gridIndex: [2,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.208], positionId:51,  positionType:"white", gridIndex: [3,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.208], positionId:52,  positionType:"black", gridIndex: [4,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.208], positionId:53,  positionType:"white", gridIndex: [5,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.208], positionId:54,  positionType:"black", gridIndex: [6,6]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.208], positionId:55,  positionType:"white", gridIndex: [7,6]},

        // Oitava fileira. Posição inicial das peças pretas.
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.195, 0.092], positionId:56,  positionType:"white", gridIndex: [0,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.281, 0.092], positionId:57,  positionType:"black", gridIndex: [1,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.368, 0.092], positionId:58,  positionType:"white", gridIndex: [2,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.452, 0.092], positionId:59,  positionType:"black", gridIndex: [3,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.540, 0.092], positionId:60,  positionType:"white", gridIndex: [4,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.627, 0.092], positionId:61,  positionType:"black", gridIndex: [5,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.713, 0.092], positionId:62,  positionType:"white", gridIndex: [6,7]},
        {area:{width: 0.0875, height: 0.1167}, capacity:1, location:[0.800, 0.092], positionId:63,  positionType:"black", gridIndex: [7,7]},
      ]
    },
    component: {
      tokenTypes: [
        {typeId:"man", tokenImage:{'Black':'assets/imgs/black0.png', 'White':'assets/imgs/white0.png'}},
        {typeId:"king", tokenImage:{'Black':'assets/imgs/black1.png', 'White':'assets/imgs/white1.png'}}
      ],
      tokens: require('js/CheckersTokens.js').tokens
    }
  },

  gameFlow: {
    actions: [
      {actionType: "selectToken", actionLabel: "Select Token"},
      {actionType: "selectPosition", actionLabel: "Select Position"},
      {actionType: "moveToken", actionLabel: ""}
    ],
    rules: {
      movement: {
        pathSelectionRule: null,
        positionSelectRule: function (GameStatus, selectedPosition) {
          let currentPlayer = GameStatus.currentPlayer;
          let currentPosition = currentPlayer.selectedToken.position;

          if (selectedPosition.isOcupied() ||
            selectedPosition.positionType != 'black') return false;

          let posX = selectedPosition.gridIndex[0];
          let posY = selectedPosition.gridIndex[1];
          let curX = currentPosition.gridIndex[0];
          let curY = currentPosition.gridIndex[1];

          let moveCount = Math.abs(posY - curY);
          if (moveCount > 2) return false;

          let isJumping = moveCount > 1;
          if (!isJumping && currentPlayer.attributes["jumping"]) return false;

          let isMovingForward = (posY - curY) < 0;
          isMovingForward =
            (currentPlayer.selectedToken.tokenType == 'king') ? true :
            ((currentPlayer.id == "Black") ? isMovingForward : !isMovingForward);

          if (!isMovingForward) return false;

          if (isJumping) {
            console.log("jump");
            let midX = (curX + posX)/2;
            let midY = (curY + posY)/2;

            let mid = GameStatus.getPositionGrid(midX, midY);
            if (!mid.isOcupied() || mid.tokens[0].ownerId ==
              currentPlayer.selectedToken.ownerId)
              return false;

            GameStatus.playerStatus[mid.tokens[0].ownerId].removeToken(mid.tokens[0]);
            currentPlayer.attributes["Captured Tokens"]++;
          }

          return isMovingForward;
        }, // Ou null
      },
      turnOptions: {
        playerOrder: "staticOrder",
        actionQueue:["selectToken", "selectPosition", "moveToken"]
      },
      conditionsToWin: {
        playerAttribute: [{attributeName:"Captured Tokens", evalOption:"exact", value:12, evalEvent:"update"}]
      }
    },
    gameEvents: {
      stoppingEvent: function (GameStatus, token) {
        console.log("Landing...");
        let kingsRow = (token.ownerId == "Black") ? 0 : 7;

        token.tokenType = (token.position.gridIndex[1] == kingsRow) ?
          "king" : token.tokenType;

        let currentPlayer = GameStatus.currentPlayer;

        // se o token veio de um pule e ainda pode pular...
        if (currentPlayer.attributes["jumping"] &&
          _canJump(GameStatus, token)) {
          // manda selecionar outra posição
          GameStatus.addAction("selectPosition", "moveToken");
          return;
        }

        // caso contrário desabilita a flag de pulo
        currentPlayer.attributes["jumping"] = false;
      },
      endTurn: function(GameStatus) {
        let tokens = GameStatus.currentPlayer.getTokens();
        if (!tokens.some(token => {
          return _canStep(GameStatus, token) || _canJump(GameStatus, token)
        })) GameStatus.endGame(GameStatus.previousPlayer);
      },
      tokenSelected: function(GameStatus, selectedToken) {
        console.log("Selected Token: " + selectedToken.id);

        let canJump = false;
        let jumpingTokens = {};
        let playerTokens = GameStatus.currentPlayer.getTokens();

        playerTokens.forEach(token => {
          if (_canJump(GameStatus, token)) {
            jumpingTokens[token.id] = token;
            canJump = jumpingTokens[selectedToken.id] !== undefined;
            GameStatus.currentPlayer.attributes["jumping"] = canJump;
          }
        });

        // Se o token pode pular, a escolha é valida
        //if (canJump) return;

        // Se existem tokens que podem pular, um deles deve ser o escolhido
        if (Object.getOwnPropertyNames(jumpingTokens).length > 0 && !canJump) {
          GameStatus.repeatAction("You need to capture the enemy token.");
          return;
        }

        if (canJump || _canStep(GameStatus, selectedToken)) {
          GameStatus.setMessage(" ");
          return;
        }

        GameStatus.repeatAction("You can't move this token, please select another one.");
      }
    }
  }
}

function _canJump(GameStatus, token) {
  let currentPosition = token.position;
  let goForward = (token.ownerId == "Black")? -1 : 1;

  let curX = currentPosition.gridIndex[0];
  let curY = currentPosition.gridIndex[1];

  let stop = (token.tokenType == 'king')? -2: 0;
  for(let i=1; i>stop; i=i-2)
    for (let j=1; j>-2; j=j-2) {
      let step = GameStatus.getPositionGrid(curX+j, curY+i*goForward);
      let jump = GameStatus.getPositionGrid(curX+2*j, curY+2*i*goForward);

      if (step && (step.isOcupied() &&
        step.tokens[0].ownerId != token.ownerId) &&
        jump && !jump.isOcupied()) {
        console.log("jump");
        return true;
      }
    }
  return false
}

function _canStep(GameStatus, token) {
  let currentPosition = token.position;
  let goForward = (token.ownerId == "Black")? -1 : 1;

  let curX = currentPosition.gridIndex[0];
  let curY = currentPosition.gridIndex[1];

  let stop = (token.tokenType == 'king')? -2: 0;
  for(let i=1; i>stop; i=i-2)
    for (let j=1; j>-2; j=j-2) {
      let step = GameStatus.getPositionGrid(curX+j, curY+i*goForward);

      // checa se pode dar um passo para frente/tras
      if (step && !step.isOcupied()) {
        console.log("step");
        return true;
      }
    }
  return false
}
