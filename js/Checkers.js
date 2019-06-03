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
      }]
    },
    board: {
      background:"assets/imgs/checkers.png",
      boardType: "grid", // point-to-point ou grid
      positions: [
        // De baixo para cima
        // Primeira fileira. Posição inicial das peças brancas
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.908], positionId:0,  positionType:"black", gridPos: [0,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.908], positionId:1,  positionType:"white", gridPos: [1,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.908], positionId:2,  positionType:"black", gridPos: [2,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.908], positionId:3,  positionType:"white", gridPos: [3,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.908], positionId:4,  positionType:"black", gridPos: [4,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.908], positionId:5,  positionType:"white", gridPos: [5,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.908], positionId:6,  positionType:"black", gridPos: [6,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.908], positionId:7,  positionType:"white", gridPos: [7,0]},

        // Segunda fileira. Posição inicial das peças brancas
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.792], positionId:8,  positionType:"white", gridPos: [0,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.792], positionId:9,  positionType:"black", gridPos: [1,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.792], positionId:10,  positionType:"white", gridPos: [2,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.792], positionId:11,  positionType:"black", gridPos: [3,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.792], positionId:12,  positionType:"white", gridPos: [4,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.792], positionId:13,  positionType:"black", gridPos: [5,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.792], positionId:14,  positionType:"white", gridPos: [6,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.792], positionId:15,  positionType:"black", gridPos: [7,1]},

        // Terceira fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.675], positionId:16,  positionType:"black", gridPos: [0,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.675], positionId:17,  positionType:"white", gridPos: [1,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.675], positionId:18,  positionType:"black", gridPos: [2,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.675], positionId:19,  positionType:"white", gridPos: [3,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.675], positionId:20,  positionType:"black", gridPos: [4,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.675], positionId:21,  positionType:"white", gridPos: [5,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.675], positionId:22,  positionType:"black", gridPos: [6,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.675], positionId:23,  positionType:"white", gridPos: [7,2]},

        // Quarta fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.558], positionId:24,  positionType:"white", gridPos: [0,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.558], positionId:25,  positionType:"black", gridPos: [1,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.558], positionId:26,  positionType:"white", gridPos: [2,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.558], positionId:27,  positionType:"black", gridPos: [3,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.558], positionId:28,  positionType:"white", gridPos: [4,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.558], positionId:29,  positionType:"black", gridPos: [5,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.558], positionId:30,  positionType:"white", gridPos: [6,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.558], positionId:31,  positionType:"black", gridPos: [7,3]},

        // Quinta fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.442], positionId:32,  positionType:"black", gridPos: [0,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.442], positionId:33,  positionType:"white", gridPos: [1,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.442], positionId:34,  positionType:"black", gridPos: [2,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.442], positionId:35,  positionType:"white", gridPos: [3,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.442], positionId:36,  positionType:"black", gridPos: [4,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.442], positionId:37,  positionType:"white", gridPos: [5,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.442], positionId:38,  positionType:"black", gridPos: [6,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.442], positionId:39,  positionType:"white", gridPos: [7,4]},

        // Sexta fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.325], positionId:40,  positionType:"white", gridPos: [0,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.325], positionId:41,  positionType:"black", gridPos: [1,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.325], positionId:42,  positionType:"white", gridPos: [2,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.325], positionId:43,  positionType:"black", gridPos: [3,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.325], positionId:44,  positionType:"white", gridPos: [4,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.325], positionId:45,  positionType:"black", gridPos: [5,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.325], positionId:46,  positionType:"white", gridPos: [6,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.325], positionId:47,  positionType:"black", gridPos: [7,5]},

        // Sétima fileira. Posição inicial das peças pretas.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.208], positionId:48,  positionType:"black", gridPos: [0,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.208], positionId:49,  positionType:"white", gridPos: [1,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.208], positionId:50,  positionType:"black", gridPos: [2,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.208], positionId:51,  positionType:"white", gridPos: [3,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.208], positionId:52,  positionType:"black", gridPos: [4,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.208], positionId:53,  positionType:"white", gridPos: [5,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.208], positionId:54,  positionType:"black", gridPos: [6,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.208], positionId:55,  positionType:"white", gridPos: [7,6]},

        // Oitava fileira. Posição inicial das peças pretas.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.092], positionId:56,  positionType:"white", gridPos: [0,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.092], positionId:57,  positionType:"black", gridPos: [1,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.092], positionId:58,  positionType:"white", gridPos: [2,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.092], positionId:59,  positionType:"black", gridPos: [3,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.092], positionId:60,  positionType:"white", gridPos: [4,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.092], positionId:61,  positionType:"black", gridPos: [5,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.092], positionId:62,  positionType:"white", gridPos: [6,7]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.092], positionId:63,  positionType:"black", gridPos: [7,7]},
      ]
    },
    component: {
      tokenTypes: [
        {typeId:"man", tokenImage:{'Black':'assets/imgs/black0.png', 'White':'assets/imgs/white0.png'}},
        {typeId:"king", tokenImage:{'Black':'assets/imgs/black1.png', 'White':'assets/imgs/white1.png'}}
      ],
      tokens: [
        {positionId: 41, tokenType: "man", ownerId:"Black"},
        {positionId: 43, tokenType: "man", ownerId:"Black"},
        {positionId: 45, tokenType: "man", ownerId:"Black"},
        {positionId: 47, tokenType: "man", ownerId:"Black"},
        {positionId: 48, tokenType: "man", ownerId:"Black"},
        {positionId: 50, tokenType: "man", ownerId:"Black"},
        {positionId: 52, tokenType: "man", ownerId:"Black"},
        {positionId: 54, tokenType: "man", ownerId:"Black"},
        {positionId: 57, tokenType: "man", ownerId:"Black"},
        {positionId: 59, tokenType: "man", ownerId:"Black"},
        {positionId: 61, tokenType: "man", ownerId:"Black"},
        {positionId: 63, tokenType: "man", ownerId:"Black"},

        {positionId: 0, tokenType: "man", ownerId:"White"},
        {positionId: 2, tokenType: "man", ownerId:"White"},
        {positionId: 4, tokenType: "man", ownerId:"White"},
        {positionId: 6, tokenType: "man", ownerId:"White"},
        {positionId: 9, tokenType: "man", ownerId:"White"},
        {positionId: 11, tokenType: "man", ownerId:"White"},
        {positionId: 13, tokenType: "man", ownerId:"White"},
        {positionId: 15, tokenType: "man", ownerId:"White"},
        {positionId: 16, tokenType: "man", ownerId:"White"},
        {positionId: 18, tokenType: "man", ownerId:"White"},
        {positionId: 20, tokenType: "man", ownerId:"White"},
        {positionId: 22, tokenType: "man", ownerId:"White"}
      ]
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
        branchRule: null,
        positionSelectRule: function (GameStatus, selectedPosition) {
          let currentPlayer = GameStatus.currentPlayer;
          let currentPosition = currentPlayer.selectedToken.position;

          if (selectedPosition.isOcupied() ||
            selectedPosition.positionType != 'black') return false;

          let posX = selectedPosition.gridPos[0];
          let posY = selectedPosition.gridPos[1];
          let curX = currentPosition.gridPos[0];
          let curY = currentPosition.gridPos[1];

          let moveCount = Math.abs(posY - curY);
          if (moveCount > 2) return false;

          let isJumping = moveCount > 1;
          let isMovingForward = (posY - curY) < 0;
          isMovingForward = (currentPlayer.id == "Black") ?
            isMovingForward : !isMovingForward;

          //console.log({isMovingForward:moveCount, isJumping:isJumping});

          if (isJumping) {
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
      diceEvent: function (GameStatus, diceValue) {
        switch (diceValue) {
          case 6:
            GameStatus.currentPlayer.attributes["combo"]++;
            if (GameStatus.currentPlayer.attributes["combo"] == 3) {
              GameStatus.endTurn("You got three 6's in a row. You lost your turn ¯\\_(ツ)_/¯");
            } else {
              GameStatus.setMessage(
                "You got " + ((GameStatus.currentPlayer.attributes["combo"] == 1)? 'a': "ANOTHER") +
                " 6!! You can move a token from your base into the game AND you get to play another turn!");
            }
            break;
          case 1:
            GameStatus.setMessage("You got a 1! You can move a token from " +
              "your base into the game!");
            GameStatus.currentPlayer.attributes["combo"] = 0;
            break;
          default:
            if (GameStatus.currentPlayer.attributes["Active Tokens"] == 0){
              GameStatus.endTurn(`You got a ${diceValue}. You need a 1 or a 6`
                + " to move a token into the game.");
            } else GameStatus.setMessage(`You got a ${diceValue}!`);
            GameStatus.currentPlayer.attributes["combo"] = 0;
            break;
        }
      },
      passingEvent: function (GameStatus) {
        console.log("Passing...");
      },
      stoppingEvent: function (GameStatus) {
        console.log("Landing...");
        GameStatus.currentPlayer.selectedToken.tokenType =
          (GameStatus.currentPlayer.selectedToken.tokenType == "man") ? "king" : "man";
      },
      endTurn: function(GameStatus) {

      },
      endGame: function(GameStatus, winner) {
        console.log("Win");
        GameStatus.setMessage(`Game Over! ${winner.id} wins!`);
      },
      tokenEliminated: function(GameStatus) {
        console.log("Token Eliminated");
      },
      tokenSelected: function(GameStatus, selectedToken) {
        console.log("Selected Token: " + selectedToken.id);

        let goForward = (selectedToken.ownerId == "Black")? -1 : 1;

        // Selecionando as posições adjacentes
        let currentPosition = selectedToken.position;
        let curX = currentPosition.gridPos[0];
        let curY = currentPosition.gridPos[1];

        let canMove = false;
        let canStep = false;
        let canJump = false;
        let stop = (selectedToken.tokenType == 'king')? -2: 0;
        console.log(stop);
        for(let i=1; i>stop; i=i-2) {
          for (let j=1; j>-2; j=j-2) {
            // checa se pode dar um passo para frente/tras
            let step = GameStatus.getPositionGrid(curX+j, curY+i*goForward);
            if (step && !step.isOcupied()) {
              console.log("step");
              canMove = true;
              break;
            }

            // se não for possível, checa se pode fazer um pulo
            let jump = GameStatus.getPositionGrid(curX+2*j, curY+2*i*goForward);
            if (step && (step.isOcupied() &&
              step.tokens[0].ownerId != selectedToken.ownerId) &&
              jump && !jump.isOcupied()) {
              console.log("jump");
              canMove = true;
              break;
            }
          }
          if (canMove) break;
        }

        if (!canMove) {
          GameStatus.repeatAction("You can't move this token, please select another one.");
        } else GameStatus.setMessage(" ");
      },
      playerEliminated: function(GameStatus, player) {
        console.log(player.id);
        GameStatus.setMessage(`${player.id} was eliminated!`);
      }
    }
  }
}
