//두 수 비교하기
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}

//점수 출력하기
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const score = parseInt(input);
if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}

//윤년 확인하기
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const year = parseInt(input);
if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 4 === 0 && year % 400 === 0)
) {
  console.log(1);
} else {
  console.log(0);
}
