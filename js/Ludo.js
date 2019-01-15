exports.boardGame = {
  id: "Ludo",
  gameData: {
    playerOptions: {
      playerCount: 4,
      playerId: ["Red", "Green", "Blue", "Yellow"],
      playerAttributes: [
        {name: "Active Tokens", value: 0, description: "Number of Tokens outside the base", image: "assets/imgs/tokenpile.svg"}
      ]
    },
    board: {
      background:"assets/imgs/LudoBoard2.png",
      boardType: "point-to-point", // point-to-point ou grid
      positions: [
        {capacity:1, location:[0.453, 0.877], positionId:0,  positionType:"normal", prev: [], next: [1]},
        {capacity:1, location:[0.453, 0.813], positionId:1,  positionType:"normal", prev: [0], next: [2]},
        {capacity:1, location:[0.453, 0.750], positionId:2,  positionType:"normal", prev: [1], next: [3]},
        {capacity:1, location:[0.453, 0.688], positionId:3,  positionType:"normal", prev: [2], next: [4]},
        {capacity:1, location:[0.453, 0.627], positionId:4,  positionType:"normal", prev: [3], next: [5]},
        {capacity:1, location:[0.406, 0.563], positionId:5,  positionType:"normal", prev: [4], next: [6]},
        {capacity:1, location:[0.359, 0.563], positionId:6,  positionType:"normal", prev: [5], next: [7]},
        {capacity:1, location:[0.311, 0.563], positionId:7,  positionType:"normal", prev: [6], next: [8]},
        {capacity:1, location:[0.265, 0.563], positionId:8,  positionType:"normal", prev: [7], next: [9]},
        {capacity:1, location:[0.217, 0.563], positionId:9,  positionType:"normal", prev: [8], next: [10]},
        {capacity:1, location:[0.171, 0.563], positionId:10, positionType:"normal", prev: [9], next: [11]},
        {capacity:1, location:[0.171, 0.500], positionId:11, positionType:"green", prev: [10], next: [12, 57]},
        {capacity:1, location:[0.171, 0.437], positionId:12, positionType:"normal", prev: [11], next: [13]},
        {capacity:1, location:[0.218, 0.437], positionId:13, positionType:"normal", prev: [12], next: [14]},
        {capacity:1, location:[0.265, 0.437], positionId:14, positionType:"normal", prev: [13], next: [15]},
        {capacity:1, location:[0.311, 0.437], positionId:15, positionType:"normal", prev: [14], next: [16]},
        {capacity:1, location:[0.359, 0.437], positionId:16, positionType:"normal", prev: [15], next: [17]},
        {capacity:1, location:[0.406, 0.437], positionId:17, positionType:"normal", prev: [16], next: [18]},
        {capacity:1, location:[0.453, 0.375], positionId:18, positionType:"normal", prev: [17], next: [19]},
        {capacity:1, location:[0.453, 0.312], positionId:19, positionType:"normal", prev: [18], next: [20]},
        {capacity:1, location:[0.453, 0.250], positionId:20, positionType:"normal", prev: [19], next: [21]},
        {capacity:1, location:[0.453, 0.187], positionId:21, positionType:"normal", prev: [20], next: [22]},
        {capacity:1, location:[0.453, 0.125], positionId:22, positionType:"normal", prev: [21], next: [23]},
        {capacity:1, location:[0.453, 0.062], positionId:23, positionType:"normal", prev: [22], next: [24]},
        {capacity:1, location:[0.500, 0.062], positionId:24, positionType:"yellow", prev: [23], next: [25, 62]},
        {capacity:1, location:[0.546, 0.062], positionId:25, positionType:"normal", prev: [24], next: [26]},
        {capacity:1, location:[0.546, 0.123], positionId:26, positionType:"normal", prev: [25], next: [27]},
        {capacity:1, location:[0.546, 0.187], positionId:27, positionType:"normal", prev: [26], next: [28]},
        {capacity:1, location:[0.546, 0.250], positionId:28, positionType:"normal", prev: [27], next: [29]},
        {capacity:1, location:[0.546, 0.312], positionId:29, positionType:"normal", prev: [28], next: [30]},
        {capacity:1, location:[0.546, 0.375], positionId:30, positionType:"normal", prev: [29], next: [31]},
        {capacity:1, location:[0.594, 0.438], positionId:31, positionType:"normal", prev: [30], next: [32]},
        {capacity:1, location:[0.641, 0.438], positionId:32, positionType:"normal", prev: [31], next: [33]},
        {capacity:1, location:[0.688, 0.438], positionId:33, positionType:"normal", prev: [32], next: [34]},
        {capacity:1, location:[0.735, 0.438], positionId:34, positionType:"normal", prev: [33], next: [35]},
        {capacity:1, location:[0.781, 0.438], positionId:35, positionType:"normal", prev: [34], next: [36]},
        {capacity:1, location:[0.829, 0.438], positionId:36, positionType:"normal", prev: [35], next: [37]},
        {capacity:1, location:[0.829, 0.500], positionId:37, positionType:"blue", prev: [36], next: [38, 67]},
        {capacity:1, location:[0.829, 0.563], positionId:38, positionType:"normal", prev: [37], next: [39]},
        {capacity:1, location:[0.781, 0.563], positionId:39, positionType:"normal", prev: [38], next: [40]},
        {capacity:1, location:[0.735, 0.563], positionId:40, positionType:"normal", prev: [39], next: [41]},
        {capacity:1, location:[0.688, 0.563], positionId:41, positionType:"normal", prev: [40], next: [42]},
        {capacity:1, location:[0.641, 0.563], positionId:42, positionType:"normal", prev: [41], next: [43]},
        {capacity:1, location:[0.594, 0.563], positionId:43, positionType:"normal", prev: [42], next: [44]},
        {capacity:1, location:[0.548, 0.625], positionId:44, positionType:"normal", prev: [43], next: [45]},
        {capacity:1, location:[0.548, 0.688], positionId:45, positionType:"normal", prev: [44], next: [46]},
        {capacity:1, location:[0.548, 0.750], positionId:46, positionType:"normal", prev: [45], next: [47]},
        {capacity:1, location:[0.548, 0.813], positionId:47, positionType:"normal", prev: [46], next: [48]},
        {capacity:1, location:[0.548, 0.875], positionId:48, positionType:"normal", prev: [47], next: [49]},
        {capacity:1, location:[0.548, 0.938], positionId:49, positionType:"normal", prev: [48], next: [50]},
        {capacity:1, location:[0.500, 0.938], positionId:50, positionType:"red",    prev: [49], next: [72, 51]},
        {capacity:1, location:[0.500, 0.877], positionId:51, positionType:"normal", prev: [50], next: [52]},
        {capacity:1, location:[0.500, 0.813], positionId:52, positionType:"normal", prev: [51], next: [53]},
        {capacity:1, location:[0.500, 0.750], positionId:53, positionType:"normal", prev: [52], next: [54]},
        {capacity:1, location:[0.500, 0.688], positionId:54, positionType:"normal", prev: [53], next: [55]},
        {capacity:1, location:[0.500, 0.625], positionId:55, positionType:"normal", prev: [54], next: [56]},
        {capacity:1, location:[0.500, 0.498], positionId:56, positionType:"finish", prev: [55], next: [50, 36, 23, 10]},

        {capacity:1, location:[0.218, 0.500], positionId:57, positionType:"normal", prev: [11], next: [58]},
        {capacity:1, location:[0.265, 0.500], positionId:58, positionType:"normal", prev: [57], next: [59]},
        {capacity:1, location:[0.311, 0.500], positionId:59, positionType:"normal", prev: [58], next: [60]},
        {capacity:1, location:[0.359, 0.500], positionId:60, positionType:"normal", prev: [59], next: [61]},
        {capacity:1, location:[0.406, 0.500], positionId:61, positionType:"normal", prev: [60], next: [56]},

        {capacity:1, location:[0.500, 0.123], positionId:62, positionType:"normal", prev: [24], next: [63]},
        {capacity:1, location:[0.500, 0.187], positionId:63, positionType:"normal", prev: [62], next: [64]},
        {capacity:1, location:[0.500, 0.250], positionId:64, positionType:"normal", prev: [63], next: [65]},
        {capacity:1, location:[0.500, 0.312], positionId:65, positionType:"normal", prev: [64], next: [66]},
        {capacity:1, location:[0.500, 0.375], positionId:66, positionType:"normal", prev: [65], next: [56]},

        {capacity:1, location:[0.783, 0.500], positionId:67, positionType:"normal", prev: [37], next: [68]},
        {capacity:1, location:[0.735, 0.500], positionId:68, positionType:"normal", prev: [67], next: [69]},
        {capacity:1, location:[0.689, 0.500], positionId:69, positionType:"normal", prev: [68], next: [70]},
        {capacity:1, location:[0.641, 0.500], positionId:70, positionType:"normal", prev: [69], next: [71]},
        {capacity:1, location:[0.594, 0.500], positionId:71, positionType:"normal", prev: [70], next: [56]},

        {capacity:1, location:[0.453, 0.938], positionId:72, positionType:"normal", prev: [50], next: [0]},

        // Vermelho Inicio
        {capacity:1, location:[0.289, 0.845], positionId:73, positionType:"redBase", prev: [], next: [0, 74]},
        {capacity:1, location:[0.289, 0.720], positionId:74, positionType:"redBase", prev: [], next: [0, 75]},
        {capacity:1, location:[0.335, 0.781], positionId:75, positionType:"redBase", prev: [], next: [0, 76]},
        {capacity:1, location:[0.241, 0.781], positionId:76, positionType:"redBase", prev: [], next: [0, 73]},

        // Verde
        {capacity:1, location:[0.289, 0.280], positionId:77, positionType:"greenBase", prev: [], next: [13, 78]},
        {capacity:1, location:[0.289, 0.155], positionId:78, positionType:"greenBase", prev: [], next: [13, 79]},
        {capacity:1, location:[0.335, 0.218], positionId:79, positionType:"greenBase", prev: [], next: [13, 80]},
        {capacity:1, location:[0.241, 0.218], positionId:80, positionType:"greenBase", prev: [], next: [13, 77]},

        // Amarelo
        {capacity:1, location:[0.711, 0.280], positionId:81, positionType:"yellowBase", prev: [], next: [26, 82]},
        {capacity:1, location:[0.711, 0.155], positionId:82, positionType:"yellowBase", prev: [], next: [26, 83]},
        {capacity:1, location:[0.759, 0.218], positionId:83, positionType:"yellowBase", prev: [], next: [26, 84]},
        {capacity:1, location:[0.664, 0.218], positionId:84, positionType:"yellowBase", prev: [], next: [26, 81]},

        {capacity:1, location:[0.711, 0.845], positionId:85, positionType:"blueBase", prev: [], next: [39, 86]},
        {capacity:1, location:[0.711, 0.720], positionId:86, positionType:"blueBase", prev: [], next: [39, 87]},
        {capacity:1, location:[0.759, 0.782], positionId:87, positionType:"blueBase", prev: [], next: [39, 88]},
        {capacity:1, location:[0.664, 0.782], positionId:88, positionType:"blueBase", prev: [], next: [39, 85]},

      ]
    },
    component: {
      dice: [
        {dieType:"nSidedDie", numberOfSides:6}
      ],
      tokens: [
        {positionId: 73, tokenType: "redToken", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},
        {positionId: 74, tokenType: "redToken", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},
        {positionId: 75, tokenType: "redToken", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},
        {positionId: 76, tokenType: "redToken", tokenImage: "assets/imgs/pokerchip1.png", ownerId:"Red"},

        {positionId: 77, tokenType: "greenToken", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},
        {positionId: 78, tokenType: "greenToken", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},
        {positionId: 79, tokenType: "greenToken", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},
        {positionId: 80, tokenType: "greenToken", tokenImage: "assets/imgs/pokerchip2.png", ownerId:"Green"},

        {positionId: 81, tokenType: "yellowToken", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},
        {positionId: 82, tokenType: "yellowToken", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},
        {positionId: 83, tokenType: "yellowToken", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},
        {positionId: 84, tokenType: "yellowToken", tokenImage: "assets/imgs/pokerchip4.png", ownerId:"Yellow"},

        {positionId: 85, tokenType: "blueToken", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"},
        {positionId: 86, tokenType: "blueToken", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"},
        {positionId: 87, tokenType: "blueToken", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"},
        {positionId: 88, tokenType: "blueToken", tokenImage: "assets/imgs/pokerchip3.png", ownerId:"Blue"}

      ]
    }
  },

  gameFlow: {
    actions: [
      {actionType: "rollDice", actionLabel: "Roll Dice"},
      {actionType: "selectToken", actionLabel: "Select Token to move"}
    ],
    rules: {
      movement: "point-to-point",
      turnOptions: {maxTurnCount: 50, playerOrder: "staticOrder", actionQueue:["rollDice", "selectToken"]},
      conditionsToWin: {playerScore: null, numRemainingTokens: 0, numPositionsHeld: null, numRemainingPlayers: null},
      conditionsToLose: {playerScore: null, numRemainingTokens: null, numPositionsHeld: null, numRemainingPlayers: null}
    },
    gameEvents: {
      diceEvent: function (gameStatus, diceValue) {},
      passingEvent: function (gameStatus, positionType) {},
      stopingEvent: function (gameStatus, positionType) {},
      endTurn: function(gameStatus) {},
      endGame: function(gameStatus) {},
      playerWin: function(gameStatus) {},
      playerEliminated: function(gameStatus) {},
      tokenGained: function(gameStatus) {},
      tokenEliminated: function(gameStatus) {}
    }
  }
}
