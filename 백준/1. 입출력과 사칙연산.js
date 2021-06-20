//Node.js의 fs모듈을 이용
const fs = require("fs");
//동기적 읽기로 표준입력장치의 값을 읽어 input에 저장한다.
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a - b);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a * b);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);
console.log(a / b);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const a = parseInt(input[0]);
const b = input[1];

for (let i = b.length - 1; i > -1; i--) {
  console.log(a * parseInt(b[i]));
}
console.log(a * parseInt(b));
