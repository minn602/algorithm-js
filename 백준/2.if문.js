// //두 수 비교하기
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ");
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);
// if (a > b) {
//   console.log(">");
// } else if (a < b) {
//   console.log("<");
// } else {
//   console.log("==");
// }

// //점수 출력하기
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const score = parseInt(input);
// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score <= 89) {
//   console.log("B");
// } else if (score >= 70 && score <= 79) {
//   console.log("C");
// } else if (score >= 60 && score <= 69) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// //윤년 확인하기
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// const year = parseInt(input);
// if (
//   (year % 4 === 0 && year % 100 !== 0) ||
//   (year % 4 === 0 && year % 400 === 0)
// ) {
//   console.log(1);
// } else {
//   console.log(0);
// }

//사분면 고르기 -> 런타임 에러
//문제 : 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
//입력 : 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
//출력 : 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const x = Number(input[0]);
const y = Number(input[1]);
if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else {
  console.log(4);
}

//2884번 문제
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const h = parseInt(input[0]);
const m = parseInt(input[1]);
let total = 0;
if (h === 0) {
  total = 60 * 24 + m - 45;
  console.log(parseInt(total / 60), total - parseInt(total / 60) * 60);
} else {
  total = 60 * h + m - 45;
  console.log(parseInt(total / 60), total - parseInt(total / 60) * 60);
}
