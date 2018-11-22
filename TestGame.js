exports.boardGame = {
  id: "TestGame",
  gameData: {
    playerOptions: {
      playerCount: 1,
      playerId: ["Player1"]
    },
    board: {
      background:"background1.png",
      boardType: "point-to-point", // point-to-point ou grid
      positions: [
        {capacity:1, location:[0.095, 0.5], positionId:0, positionType:"normal", prev: [], next: [1]},
        {capacity:1, location:[0.238, 0.5], positionId:1, positionType:"advance",
            prev: [0], next: [2]},
        {capacity:1, location:[0.375, 0.5], positionId:2, positionType:"normal",
            prev: [1], next: [3]},
        {capacity:1, location:[0.512, 0.5], positionId:3, positionType:"normal",
            prev: [2], next: [4]},
        {capacity:1, location:[0.650, 0.5], positionId:4, positionType:"normal",
            prev: [3], next: [5]},
        {capacity:1, location:[0.780, 0.5], positionId:5, positionType:"back",
            prev: [4], next: [6]},
        {capacity:1, location:[0.900, 0.5], positionId:6, positionType:"finish", prev: [5], next: []}
      ]
    },
    component: {
      dice: [
        {dieType:"nSidedDie", numberOfSides:6}
      ],
      tokens: [
        {positionId: 0, tokenType: "pawn", tokenImg: "pokerchip1.png", ownerId:"Player1"}
      ]
    }
  },

  gameFlow: {
    actions: ["move", "rollDice"],
    rules: {movement: "point-to-point", turn: "fixedOrder"},
    goal: [{goalType: "areaControl", positionType: "finish"}]
  }
}
