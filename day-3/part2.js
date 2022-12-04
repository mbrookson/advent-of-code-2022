const fs = require("fs");
const letterWeights = require("./letter-weights");

const data = fs.readFileSync("./data.txt", "utf8");
const lines = data.split("\n");

let prioritySum = 0;

const lineGroups = lines.reduce((groups, line, i) => {
  if (i % 3 === 0) {
    groups.push([]);
  }

  groups[groups.length - 1].push(line);

  return groups;
}, []);

lineGroups.forEach((lines, i) => {
  const line = lines[0];
  const line2 = lines[1];
  const line3 = lines[2];

  let match;

  for (let i = 0; i < line.length; i++) {
    if (match) break;

    const letter = line[i];
    const letterMatches = line2.includes(letter) && line3.includes(letter);

    if (letterMatches) {
      match = letter;
    }
  }

  prioritySum += letterWeights[match];
});

console.log(prioritySum);
