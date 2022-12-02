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

const isPlayerWin = (playerChoice, opponentChoice) => {
  if (playerChoice === "rock" && opponentChoice === "scissors") {
    return true;
  }
  if (playerChoice === "paper" && opponentChoice === "rock") {
    return true;
  }
  if (playerChoice === "scissors" && opponentChoice === "paper") {
    return true;
  }
  return false;
};

const isDraw = (playerChoice, opponentChoice) => {
  return opponentChoice === playerChoice;
};

const lose = 0;
const draw = 3;
const win = 6;

let score = 0;

lines.forEach((line) => {
  const [opponentLetter, playerLetter] = line.split(" ");
  const opponentChoiceName = opponentMap[opponentLetter];
  const playerChoice = playerMap[playerLetter];

  let turnScore;

  if (isDraw(playerChoice.name, opponentChoiceName)) {
    turnScore = draw + playerChoice.value;
  } else if (isPlayerWin(playerChoice.name, opponentChoiceName)) {
    turnScore = win + playerChoice.value;
  } else {
    turnScore = lose + playerChoice.value;
  }

  score += turnScore;
});

console.log(score);
