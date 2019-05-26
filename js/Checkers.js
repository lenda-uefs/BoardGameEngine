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
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.908], positionId:1,  positionType:"white", gridPos: [0,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.908], positionId:2,  positionType:"black", gridPos: [0,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.908], positionId:3,  positionType:"white", gridPos: [0,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.908], positionId:4,  positionType:"black", gridPos: [0,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.908], positionId:5,  positionType:"white", gridPos: [0,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.908], positionId:6,  positionType:"black", gridPos: [0,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.908], positionId:7,  positionType:"white", gridPos: [0,7]},

        // Segunda fileira. Posição inicial das peças brancas
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.792], positionId:8,  positionType:"white", gridPos: [1,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.792], positionId:9,  positionType:"black", gridPos: [1,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.792], positionId:10,  positionType:"white", gridPos: [1,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.792], positionId:11,  positionType:"black", gridPos: [1,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.792], positionId:12,  positionType:"white", gridPos: [1,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.792], positionId:13,  positionType:"black", gridPos: [1,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.792], positionId:14,  positionType:"white", gridPos: [1,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.792], positionId:15,  positionType:"black", gridPos: [1,7]},

        // Terceira fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.675], positionId:16,  positionType:"black", gridPos: [2,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.675], positionId:17,  positionType:"white", gridPos: [2,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.675], positionId:18,  positionType:"black", gridPos: [2,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.675], positionId:19,  positionType:"white", gridPos: [2,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.675], positionId:20,  positionType:"black", gridPos: [2,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.675], positionId:21,  positionType:"white", gridPos: [2,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.675], positionId:22,  positionType:"black", gridPos: [2,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.675], positionId:23,  positionType:"white", gridPos: [2,7]},

        // Quarta fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.558], positionId:24,  positionType:"white", gridPos: [3,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.558], positionId:25,  positionType:"black", gridPos: [3,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.558], positionId:26,  positionType:"white", gridPos: [3,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.558], positionId:27,  positionType:"black", gridPos: [3,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.558], positionId:28,  positionType:"white", gridPos: [3,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.558], positionId:29,  positionType:"black", gridPos: [3,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.558], positionId:30,  positionType:"white", gridPos: [3,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.558], positionId:31,  positionType:"black", gridPos: [3,7]},

        // Quinta fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.442], positionId:32,  positionType:"black", gridPos: [4,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.442], positionId:33,  positionType:"white", gridPos: [4,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.442], positionId:34,  positionType:"black", gridPos: [4,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.442], positionId:35,  positionType:"white", gridPos: [4,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.442], positionId:36,  positionType:"black", gridPos: [4,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.442], positionId:37,  positionType:"white", gridPos: [4,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.442], positionId:38,  positionType:"black", gridPos: [4,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.442], positionId:39,  positionType:"white", gridPos: [4,7]},

        // Sexta fileira.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.325], positionId:40,  positionType:"white", gridPos: [5,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.325], positionId:41,  positionType:"black", gridPos: [5,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.325], positionId:42,  positionType:"white", gridPos: [5,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.325], positionId:43,  positionType:"black", gridPos: [5,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.325], positionId:44,  positionType:"white", gridPos: [5,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.325], positionId:45,  positionType:"black", gridPos: [5,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.325], positionId:46,  positionType:"white", gridPos: [5,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.325], positionId:47,  positionType:"black", gridPos: [5,7]},

        // Sétima fileira. Posição inicial das peças pretas.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.208], positionId:48,  positionType:"black", gridPos: [6,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.208], positionId:49,  positionType:"white", gridPos: [6,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.208], positionId:50,  positionType:"black", gridPos: [6,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.208], positionId:51,  positionType:"white", gridPos: [6,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.208], positionId:52,  positionType:"black", gridPos: [6,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.208], positionId:53,  positionType:"white", gridPos: [6,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.208], positionId:54,  positionType:"black", gridPos: [6,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.208], positionId:55,  positionType:"white", gridPos: [6,7]},

        // Oitava fileira. Posição inicial das peças pretas.
        {width:0.0875, height:0.1167, capacity:1, location:[0.195, 0.092], positionId:56,  positionType:"white", gridPos: [7,0]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.281, 0.092], positionId:57,  positionType:"black", gridPos: [7,1]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.368, 0.092], positionId:58,  positionType:"white", gridPos: [7,3]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.452, 0.092], positionId:59,  positionType:"black", gridPos: [7,2]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.540, 0.092], positionId:60,  positionType:"white", gridPos: [7,4]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.627, 0.092], positionId:61,  positionType:"black", gridPos: [7,5]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.713, 0.092], positionId:62,  positionType:"white", gridPos: [7,6]},
        {width:0.0875, height:0.1167, capacity:1, location:[0.800, 0.092], positionId:63,  positionType:"black", gridPos: [7,7]},
      ]
    },
    component: {
      tokens: [
        {positionId: 41, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 43, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 45, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 47, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 48, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 50, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 52, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 54, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 57, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 59, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 61, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},
        {positionId: 63, tokenType: "black0", tokenImage: "assets/imgs/black0.png", ownerId:"Black"},

        {positionId: 0, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 2, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 4, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 6, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 9, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 11, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 13, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 15, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 16, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 18, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 20, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"},
        {positionId: 22, tokenType: "white0", tokenImage: "assets/imgs/white0.png", ownerId:"White"}
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
        branchRule: function (GameStatus) { // Ou "manual" ou uma função
          let currentToken = GameStatus.currentPlayer.selectedToken;
          let currentPosition = currentToken.position;
          let positionMap = {
            red:0,
            green:1,
            yellow:2,
            blue:3
          };

          if (currentPosition.positionType == "finish") {
            return currentPosition.next[positionMap[currentToken.tokenType]];
          } else if (currentToken.tokenType != currentPosition.positionType) {
            return currentPosition.next[0];
          } else return currentPosition.next[1];
        },
        positionSelectRule: null, // Ou uma função
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
        let currentToken = GameStatus.currentPlayer.selectedToken;
        let stopPosition = currentToken.position;
        let activeTokenList = [];

        function addActiveToken(activeTokenList, token) {
          // Adiciona o token na lista de tokens ativos
          activeTokenList.push(token.id);

          // Atualiza o numero de tokens ativos
          GameStatus.playerStatus[token.ownerId].attributes["Active Tokens"] =
            activeTokenList.length;
        }

        function removeActiveToken(activeTokenList, token) {
          // Se o token não está na lista, não há o que remover
          if (activeTokenList.indexOf(token.id) == -1)
            return;

          // Remove o token da lista de tokens ativos
          activeTokenList.splice(
            activeTokenList.indexOf(token.id), 1
          );

          // Atualiza o numero de tokens
          GameStatus.playerStatus[token.ownerId].attributes["Active Tokens"] =
            activeTokenList.length;
        }

        if (stopPosition.tokens.length > stopPosition.capacity) {
          // Pega o primeiro token que estava na posição
          let firstToken = stopPosition.tokens[0];

          // Se os tokens tiverem o mesmo tipo...
          if (currentToken.tokenType == firstToken.tokenType) {
            // Reseta a posição do token atual
            currentToken.resetPositionTurn();
            GameStatus.setMessage("You landed on your own token! Returning to starting position.");

          } else { // Caso contrário
            // manda o token do inimigo pra base
            firstToken.resetPositionGame();

            // Remove o token da lista de tokens ativos
            activeTokenList = GameStatus.playerStatus[firstToken.ownerId].attributes["Active Token List"];
            removeActiveToken(activeTokenList, firstToken);
            GameStatus.setMessage("You sent an enemy token back to its base!");
          }
        }

        activeTokenList = GameStatus.playerStatus[currentToken.ownerId].attributes["Active Token List"];

        // Se o token parou fora da base e se o token não está na lista de ativos...
        if (!currentToken.position.positionType.includes("Base") &&
          !currentToken.position.positionType.includes("finish") &&
          activeTokenList.indexOf(currentToken.id) == -1) {
          // Adiciona o token na lista de tokens ativos
          addActiveToken(activeTokenList, currentToken);

        // Se o token parou na base
        } else if (currentToken.position.positionType.includes("Base")) {
          // Remove o token da lista de tokens ativos
          removeActiveToken(activeTokenList, currentToken);

        // Se o token parou na linha de chegada
        } else if (currentToken.position.positionType == "finish") {
          removeActiveToken(activeTokenList, currentToken);
          GameStatus.playerStatus[currentToken.ownerId].removeToken(currentToken);
        }
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
        if (
          selectedToken.position.positionType.includes("Base") &&
          GameStatus.currentPlayer.diceValue != 6 &&
          GameStatus.currentPlayer.diceValue != 1 &&
          GameStatus.currentPlayer.attributes["Active Tokens"] > 0
        ) {
          GameStatus.repeatAction(`You got a ${GameStatus.currentPlayer.diceValue}.`
            + "You need a 1 or a 6 to move a token into the game."
            + " Please select another token.");
        } else GameStatus.setMessage(" ");
      },
      playerEliminated: function(GameStatus, player) {
        console.log(player.id);
        GameStatus.setMessage(`${player.id} was eliminated!`);
      }
    }
  }
}
