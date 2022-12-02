const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf8");

const lines = data.split("\n");

const totals = [0];

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];

  if (line === "") {
    totals.push(0);
  } else {
    totals[totals.length - 1] = totals[totals.length - 1] + parseInt(line, 10);
  }
}

const totalsInOrder = totals.sort((a, b) => a - b).reverse();

console.log(
  totalsInOrder.splice(0, 3).reduce((sum, num) => (sum = sum + num), 0)
);
