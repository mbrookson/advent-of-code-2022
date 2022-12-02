const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf8");
const lines = data.split("\n");

const opponentMap = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const playerMap = {
  X: { name: "rock", value: 1 },
  Y: { name: "paper", value: 2 },
  Z: { name: "scissors", value: 3 },
};

const shouldDraw = "Y";
const shouldWin = "Z";

const getDraw = (opponentChoice) => {
  switch (opponentChoice) {
    case "rock":
      return playerMap.X;
    case "paper":
      return playerMap.Y;
    case "scissors":
      return playerMap.Z;
  }
};

const getWin = (opponentChoice) => {
  switch (opponentChoice) {
    case "rock":
      return playerMap.Y;
    case "paper":
      return playerMap.Z;
    case "scissors":
      return playerMap.X;
  }
};

const getLose = (opponentChoice) => {
  switch (opponentChoice) {
    case "rock":
      return playerMap.Z;
    case "paper":
      return playerMap.X;
    case "scissors":
      return playerMap.Y;
  }
};

const lose = 0;
const draw = 3;
const win = 6;

let score = 0;

lines.forEach((line) => {
  const [opponentLetter, expectedResult] = line.split(" ");
  const opponentChoiceName = opponentMap[opponentLetter];

  let turnScore;

  if (expectedResult === shouldDraw) {
    const playerChoice = getDraw(opponentChoiceName);
    turnScore = draw + playerChoice.value;
  } else if (expectedResult === shouldWin) {
    const playerChoice = getWin(opponentChoiceName);
    turnScore = win + playerChoice.value;
  } else {
    const playerChoice = getLose(opponentChoiceName);
    turnScore = lose + playerChoice.value;
  }

  score += turnScore;
});

console.log(score);
