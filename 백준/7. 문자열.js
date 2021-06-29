//11645번
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input.charCodeAt(0));

//11720번
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const str = input[1].split("");

let total = 0;
for (let i = 0; i < n; i++) {
  total += parseInt(str[i]);
}

console.log(total);

//10809번
