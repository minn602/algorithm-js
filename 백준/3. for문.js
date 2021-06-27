const { sign } = require("node:crypto");

//구구단
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
for (let i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}

//a+b
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}

//8393번 문제
//문제 : n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
//입력 : 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
//출력 : 1부터 n까지 합을 출력한다.

//fs모듈을 사용한 풀이
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const num = parseInt(input);
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum += i;
}
console.log(sum);

//readline 모듈을 사용한 풀이
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const num = Number(line);

  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}).on("close", function () {
  process.exit();
});

//15552번 문제
//입력 : 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
//출력 : 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
for (let i = 0; i < arr.length; i++) {
  let nums = arr[i].split(" ");
  console.log(parseInt(nums[0]) + parseInt(nums[1]));
}

//2741 문제
//자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
//입력 : 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
//출력 : 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = parseInt(input);
for (let i = 1; i <= n; i++) {
  console.log(i);
}
