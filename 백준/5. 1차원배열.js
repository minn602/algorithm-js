//10818번
//런타임 에러 (stack size exceed)
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = input[1].split(" ");
arr = arr.map((el) => parseInt(el));
console.log(Math.min(...arr), Math.max(...arr));

//2562번
let [...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let max = Number.MIN_SAFE_INTEGER;
let idx;
for (let i = 0; i < arr.length; i++) {
  if (parseInt(arr[i]) > max) {
    max = parseInt(arr[i]);
    idx = i + 1;
  }
}
console.log(max);
console.log(idx);

//2577번
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = (
  parseInt(input[0]) *
  parseInt(input[1]) *
  parseInt(input[2])
).toString();
let arr = new Array(10).fill(0);
for (let i = 0; i < result.length; i++) {
  arr[result[i]] += 1;
}
for (let x of arr) {
  console.log(x);
}

//3052번
const [...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(parseInt(arr[i]) % 42);
}

let count = new Set(result);
count = [...count].length;
console.log(count);

//1546번 문제
//1. 최댓값 구하기 2. 새로운 평균 구하기
//1. map과 reduce를 이용한 풀이 -> 런타임 에러 -> Math.max를 Number.max로 잘못 적음
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ");

arr = arr.map((n) => Number(n));
let max = Math.max(...arr);
let total = arr.reduce((a, b) => a + (b / max) * 100, 0);
console.log(total / parseInt(n));

//2. for문을 이용한 풀이
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(arr[i]);
}

let max = Math.max(...arr);
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += (arr[i] / max) * 100;
}
console.log(total / parseInt(n));

//8958번
//1. O가 연속 나오면 스코어에 1씩 더하기 2. X만나면 스코어는 0으로 리셋
let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// let num = Number(input[0]);

for (let i = 0; i < arr.length; i++) {
  let total = 0;
  let score = 0;
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "O") {
      score += 1;
    } else {
      score = 0;
    }
    total += score;
  }
  console.log(total);
}

//4344번 문제
//1. 평균 구하기 2. 평균 점수 넘는 수 구하기 3. 비율 출력
let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
// arr = input[1].split(" ");
// arr = arr.map((el) => Number(el));

for (let i = 0; i < n; i++) {
  arr[i] = arr[i].trim().split(" ");
  arr[i] = arr[i].map((el) => Number(el));

  let cnt = 0;
  let avg =
    arr[i].reduce((a, b) => {
      return a + b;
    }, -arr[i][0]) / arr[i][0];

  for (let j = 1; j <= arr[0]; j++) {
    if (arr[i][j] > avg) {
      cnt++;
    }
  }
  console.log(`${((cnt / arr[i][0]) * 100).toFixed(3)}%`);
}
