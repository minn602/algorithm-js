//1712번
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const fixed = Number(input[0]);
const changable = Number(input[1]);
const product = Number(input[2]);

//p * qty > fixed + cha * qty;
//(p - cha)*qty > fixed   -> p-cha 가 0이하이면 손익분기점은 없다.

if (product - changable <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(fixed / (product - changable)) + 1);
}

//2292번
//6의 배수로 갯수가 늘어나고 있음
// 1 -> 1개
// 2~7 -> 6개
// 8~19 -> 12개
// 20~37 -> 18개
