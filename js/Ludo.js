exports.boardGame = {
  id: "Ludo",
  gameData: {
    playerOptions: {
      playerCount: 4,
      playerId: ["Red", "Green", "Yellow", "Blue"],
      playerAttributes: [
        {name: "Active Tokens", value: 0, description: "Number of Tokens outside the base", image: "assets/imgs/tokenpile.svg", visible:true},
        {name: "Active Token List", value: [], description: "", image: "", visible:false},
        {name: "combo", value: 0, description: "", image: "", visible:false}
      ]
    },
    board: {
      background:"assets/imgs/LudoBoard2.png",
      boardType: "point-to-point", // point-to-point ou grid
      positions: [
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.877], positionId:0,  positionType:"normal", prev: [], next: [1]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.813], positionId:1,  positionType:"normal", prev: [0], next: [2]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.750], positionId:2,  positionType:"normal", prev: [1], next: [3]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.688], positionId:3,  positionType:"normal", prev: [2], next: [4]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.627], positionId:4,  positionType:"normal", prev: [3], next: [5]},
        {width:0.04875, height:0.065, capacity:1, location:[0.406, 0.563], positionId:5,  positionType:"normal", prev: [4], next: [6]},
        {width:0.04875, height:0.065, capacity:1, location:[0.359, 0.563], positionId:6,  positionType:"normal", prev: [5], next: [7]},
        {width:0.04875, height:0.065, capacity:1, location:[0.311, 0.563], positionId:7,  positionType:"normal", prev: [6], next: [8]},
        {width:0.04875, height:0.065, capacity:1, location:[0.265, 0.563], positionId:8,  positionType:"normal", prev: [7], next: [9]},
        {width:0.04875, height:0.065, capacity:1, location:[0.217, 0.563], positionId:9,  positionType:"normal", prev: [8], next: [10]},
        {width:0.04875, height:0.065, capacity:1, location:[0.171, 0.563], positionId:10, positionType:"normal", prev: [9], next: [11]},
        {width:0.04875, height:0.065, capacity:1, location:[0.171, 0.500], positionId:11, positionType:"green", prev: [10], next: [12, 57]},
        {width:0.04875, height:0.065, capacity:1, location:[0.171, 0.437], positionId:12, positionType:"normal", prev: [11], next: [13]},
        {width:0.04875, height:0.065, capacity:1, location:[0.218, 0.437], positionId:13, positionType:"normal", prev: [12], next: [14]},
        {width:0.04875, height:0.065, capacity:1, location:[0.265, 0.437], positionId:14, positionType:"normal", prev: [13], next: [15]},
        {width:0.04875, height:0.065, capacity:1, location:[0.311, 0.437], positionId:15, positionType:"normal", prev: [14], next: [16]},
        {width:0.04875, height:0.065, capacity:1, location:[0.359, 0.437], positionId:16, positionType:"normal", prev: [15], next: [17]},
        {width:0.04875, height:0.065, capacity:1, location:[0.406, 0.437], positionId:17, positionType:"normal", prev: [16], next: [18]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.375], positionId:18, positionType:"normal", prev: [17], next: [19]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.312], positionId:19, positionType:"normal", prev: [18], next: [20]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.250], positionId:20, positionType:"normal", prev: [19], next: [21]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.187], positionId:21, positionType:"normal", prev: [20], next: [22]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.125], positionId:22, positionType:"normal", prev: [21], next: [23]},
        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.062], positionId:23, positionType:"normal", prev: [22], next: [24]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.062], positionId:24, positionType:"yellow", prev: [23], next: [25, 62]},
        {width:0.04875, height:0.065, capacity:1, location:[0.546, 0.062], positionId:25, positionType:"normal", prev: [24], next: [26]},
        {width:0.04875, height:0.065, capacity:1, location:[0.546, 0.123], positionId:26, positionType:"normal", prev: [25], next: [27]},
        {width:0.04875, height:0.065, capacity:1, location:[0.546, 0.187], positionId:27, positionType:"normal", prev: [26], next: [28]},
        {width:0.04875, height:0.065, capacity:1, location:[0.546, 0.250], positionId:28, positionType:"normal", prev: [27], next: [29]},
        {width:0.04875, height:0.065, capacity:1, location:[0.546, 0.312], positionId:29, positionType:"normal", prev: [28], next: [30]},
        {width:0.04875, height:0.065, capacity:1, location:[0.546, 0.375], positionId:30, positionType:"normal", prev: [29], next: [31]},
        {width:0.04875, height:0.065, capacity:1, location:[0.594, 0.438], positionId:31, positionType:"normal", prev: [30], next: [32]},
        {width:0.04875, height:0.065, capacity:1, location:[0.641, 0.438], positionId:32, positionType:"normal", prev: [31], next: [33]},
        {width:0.04875, height:0.065, capacity:1, location:[0.688, 0.438], positionId:33, positionType:"normal", prev: [32], next: [34]},
        {width:0.04875, height:0.065, capacity:1, location:[0.735, 0.438], positionId:34, positionType:"normal", prev: [33], next: [35]},
        {width:0.04875, height:0.065, capacity:1, location:[0.781, 0.438], positionId:35, positionType:"normal", prev: [34], next: [36]},
        {width:0.04875, height:0.065, capacity:1, location:[0.829, 0.438], positionId:36, positionType:"normal", prev: [35], next: [37]},
        {width:0.04875, height:0.065, capacity:1, location:[0.829, 0.500], positionId:37, positionType:"blue", prev: [36], next: [38, 67]},
        {width:0.04875, height:0.065, capacity:1, location:[0.829, 0.563], positionId:38, positionType:"normal", prev: [37], next: [39]},
        {width:0.04875, height:0.065, capacity:1, location:[0.781, 0.563], positionId:39, positionType:"normal", prev: [38], next: [40]},
        {width:0.04875, height:0.065, capacity:1, location:[0.735, 0.563], positionId:40, positionType:"normal", prev: [39], next: [41]},
        {width:0.04875, height:0.065, capacity:1, location:[0.688, 0.563], positionId:41, positionType:"normal", prev: [40], next: [42]},
        {width:0.04875, height:0.065, capacity:1, location:[0.641, 0.563], positionId:42, positionType:"normal", prev: [41], next: [43]},
        {width:0.04875, height:0.065, capacity:1, location:[0.594, 0.563], positionId:43, positionType:"normal", prev: [42], next: [44]},
        {width:0.04875, height:0.065, capacity:1, location:[0.548, 0.625], positionId:44, positionType:"normal", prev: [43], next: [45]},
        {width:0.04875, height:0.065, capacity:1, location:[0.548, 0.688], positionId:45, positionType:"normal", prev: [44], next: [46]},
        {width:0.04875, height:0.065, capacity:1, location:[0.548, 0.750], positionId:46, positionType:"normal", prev: [45], next: [47]},
        {width:0.04875, height:0.065, capacity:1, location:[0.548, 0.813], positionId:47, positionType:"normal", prev: [46], next: [48]},
        {width:0.04875, height:0.065, capacity:1, location:[0.548, 0.875], positionId:48, positionType:"normal", prev: [47], next: [49]},
        {width:0.04875, height:0.065, capacity:1, location:[0.548, 0.938], positionId:49, positionType:"normal", prev: [48], next: [50]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.938], positionId:50, positionType:"red",    prev: [49], next: [72, 51]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.877], positionId:51, positionType:"normal", prev: [50], next: [52]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.813], positionId:52, positionType:"normal", prev: [51], next: [53]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.750], positionId:53, positionType:"normal", prev: [52], next: [54]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.688], positionId:54, positionType:"normal", prev: [53], next: [55]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.625], positionId:55, positionType:"normal", prev: [54], next: [56]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.498], positionId:56, positionType:"finish", prev: [55], next: [51, 57, 62, 67]},

        {width:0.04875, height:0.065, capacity:1, location:[0.218, 0.500], positionId:57, positionType:"normal", prev: [11], next: [58]},
        {width:0.04875, height:0.065, capacity:1, location:[0.265, 0.500], positionId:58, positionType:"normal", prev: [57], next: [59]},
        {width:0.04875, height:0.065, capacity:1, location:[0.311, 0.500], positionId:59, positionType:"normal", prev: [58], next: [60]},
        {width:0.04875, height:0.065, capacity:1, location:[0.359, 0.500], positionId:60, positionType:"normal", prev: [59], next: [61]},
        {width:0.04875, height:0.065, capacity:1, location:[0.406, 0.500], positionId:61, positionType:"normal", prev: [60], next: [56]},

        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.123], positionId:62, positionType:"normal", prev: [24], next: [63]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.187], positionId:63, positionType:"normal", prev: [62], next: [64]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.250], positionId:64, positionType:"normal", prev: [63], next: [65]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.312], positionId:65, positionType:"normal", prev: [64], next: [66]},
        {width:0.04875, height:0.065, capacity:1, location:[0.500, 0.375], positionId:66, positionType:"normal", prev: [65], next: [56]},

        {width:0.04875, height:0.065, capacity:1, location:[0.783, 0.500], positionId:67, positionType:"normal", prev: [37], next: [68]},
        {width:0.04875, height:0.065, capacity:1, location:[0.735, 0.500], positionId:68, positionType:"normal", prev: [67], next: [69]},
        {width:0.04875, height:0.065, capacity:1, location:[0.689, 0.500], positionId:69, positionType:"normal", prev: [68], next: [70]},
        {width:0.04875, height:0.065, capacity:1, location:[0.641, 0.500], positionId:70, positionType:"normal", prev: [69], next: [71]},
        {width:0.04875, height:0.065, capacity:1, location:[0.594, 0.500], positionId:71, positionType:"normal", prev: [70], next: [56]},

        {width:0.04875, height:0.065, capacity:1, location:[0.453, 0.938], positionId:72, positionType:"normal", prev: [50], next: [0]},

        // Vermelho Inicio
        {width:0.04875, height:0.065, capacity:1, location:[0.289, 0.845], positionId:73, positionType:"redBase", prev: [], next: [0, 74]},
        {width:0.04875, height:0.065, capacity:1, location:[0.289, 0.720], positionId:74, positionType:"redBase", prev: [], next: [0, 75]},
        {width:0.04875, height:0.065, capacity:1, location:[0.335, 0.781], positionId:75, positionType:"redBase", prev: [], next: [0, 76]},
        {width:0.04875, height:0.065, capacity:1, location:[0.241, 0.781], positionId:76, positionType:"redBase", prev: [], next: [0, 73]},

        // Verde
        {width:0.04875, height:0.065, capacity:1, location:[0.289, 0.280], positionId:77, positionType:"greenBase", prev: [], next: [13, 78]},
        {width:0.04875, height:0.065, capacity:1, location:[0.289, 0.155], positionId:78, positionType:"greenBase", prev: [], next: [13, 79]},
        {width:0.04875, height:0.065, capacity:1, location:[0.335, 0.218], positionId:79, positionType:"greenBase", prev: [], next: [13, 80]},
        {width:0.04875, height:0.065, capacity:1, location:[0.241, 0.218], positionId:80, positionType:"greenBase", prev: [], next: [13, 77]},

        // Amarelo
        {width:0.04875, height:0.065, capacity:1, location:[0.711, 0.280], positionId:81, positionType:"yellowBase", prev: [], next: [26, 82]},
        {width:0.04875, height:0.065, capacity:1, location:[0.711, 0.155], positionId:82, positionType:"yellowBase", prev: [], next: [26, 83]},
        {width:0.04875, height:0.065, capacity:1, location:[0.759, 0.218], positionId:83, positionType:"yellowBase", prev: [], next: [26, 84]},
        {width:0.04875, height:0.065, capacity:1, location:[0.664, 0.218], positionId:84, positionType:"yellowBase", prev: [], next: [26, 81]},

        {width:0.04875, height:0.065, capacity:1, location:[0.711, 0.845], positionId:85, positionType:"blueBase", prev: [], next: [39, 86]},
        {width:0.04875, height:0.065, capacity:1, location:[0.711, 0.720], positionId:86, positionType:"blueBase", prev: [], next: [39, 87]},
        {width:0.04875, height:0.065, capacity:1, location:[0.759, 0.782], positionId:87, positionType:"blueBase", prev: [], next: [39, 88]},
        {width:0.04875, height:0.065, capacity:1, location:[0.664, 0.782], positionId:88, positionType:"blueBase", prev: [], next: [39, 85]},

      ]
    },
    component: {
      dice: [
        {dieType:"nSidedDie", numberOfSides:6}
      ],
      tokenTypes: [
        {typeId:"red", tokenImage:{'Red':'assets/imgs/pokerchip1.png'}},
        {typeId:"green", tokenImage:{'Green':'assets/imgs/pokerchip2.png'}},
        {typeId:"yellow", tokenImage:{'Yellow':'assets/imgs/pokerchip4.png'}},
        {typeId:"blue", tokenImage:{'Blue':'assets/imgs/pokerchip3.png'}},
      ],
      tokens: [
        {positionId: 73, tokenType: "red", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},
        {positionId: 74, tokenType: "red", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},
        {positionId: 75, tokenType: "red", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},
        {positionId: 76, tokenType: "red", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},

        {positionId: 77, tokenType: "green", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},
        {positionId: 78, tokenType: "green", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},
        {positionId: 79, tokenType: "green", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},
        {positionId: 80, tokenType: "green", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},

        {positionId: 81, tokenType: "yellow", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},
        {positionId: 82, tokenType: "yellow", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},
        {positionId: 83, tokenType: "yellow", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},
        {positionId: 84, tokenType: "yellow", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},

        {positionId: 85, tokenType: "blue", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"},
        {positionId: 86, tokenType: "blue", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"},
        {positionId: 87, tokenType: "blue", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"},
        {positionId: 88, tokenType: "blue", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"}

      ]
    }
  },

  gameFlow: {
    actions: [
      {actionType: "rollDice", actionLabel: "Roll Dice"},
      {actionType: "selectToken", actionLabel: "Select Token to move"},
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
        playerOrder: function (GameStatus, currentPlayer){
          if (GameStatus.currentTurn == 1) return "Red";

          let nextPlayer = {Red:"Green", Green:"Yellow", Yellow:"Blue", Blue:"Red"};

          if (currentPlayer.diceValue != 6)
            return nextPlayer[currentPlayer.id];

          if (currentPlayer.attributes["combo"] == 3){
            currentPlayer.attributes["combo"] = 0;
            return nextPlayer[currentPlayer.id];
          }

          GameStatus.elapsedTurns--;
          GameStatus.currentTurn--;
          return currentPlayer.id;
        },
        actionQueue:["rollDice", "selectToken", "moveToken"]
      },
      conditionsToWin: {
        numRemainingTokens: {tokenType:null, evalOption:"exact", value:0, evalEvent:"update"}
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
      passingEvent: function (GameStatus, currentToken) {
        console.log("Passing...");
      },
      stoppingEvent: function (GameStatus, currentToken) {
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
