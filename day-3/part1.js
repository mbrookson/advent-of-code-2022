const assert = require("assert");
const fs = require("fs");
const letterWeights = require("./letter-weights");

const data = fs.readFileSync("./data.txt", "utf8");
const lines = data.split("\n");

let prioritySum = 0;

lines.forEach((line) => {
  const compartmentSize = line.length / 2;
  const compartment1 = line.substring(0, compartmentSize);
  const compartment2 = line.substring(compartmentSize);

  let match;

  for (let i = 0; i < compartment1.length; i++) {
    if (match) break;

    const letter = compartment1[i];
    const letterMatches = compartment2.includes(letter);

    if (letterMatches) {
      match = letter;
    }
  }

  prioritySum += letterWeights[match];
});

console.log(prioritySum);
