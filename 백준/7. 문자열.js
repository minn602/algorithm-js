//! 11645번
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

//! 10809번
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let resultArr = [];

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);

  for (let j = 0; j < input.length; j++) {
    resultArr.push(input[j].indexOf(alphabet));
  }
}

console.log(resultArr.join(" "));

//2675번
let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = parseInt(n);
for (let i = 0; i < n; i++) {
  let arr2 = arr[i].split(" ");
  let times = parseInt(arr2[0]);
  let str = arr2[1].split("");
  let s = "";

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < times; k++) {
      s += str[j];
    }
  }

  console.log(s);
}

//1157번

//1152번
//빈칸도 하나의 스트링으로 인식하기 때문에 카운트 된다 -> 제외처리해주어야된다.
let input = require("fs").readFileSync("/dev/stdin").toString();
input = input.trim().split(" ");
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    count++;
  }
}

console.log(count);

//2908번
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
const n1 = parseInt(input[0].split("").reverse().join(""));
const n2 = parseInt(input[1].split("").reverse().join(""));

if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}

//5622번
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let time = 0;
for (let x of input) {
  if (x === "A" || x === "B" || x === "C") {
    time += 3;
  } else if (x === "D" || x === "E" || x === "F") {
    time += 4;
  } else if (x === "G" || x === "H" || x === "I") {
    time += 5;
  } else if (x === "J" || x === "K" || x === "L") {
    time += 6;
  } else if (x === "M" || x === "N" || x === "O") {
    time += 7;
  } else if (x === "P" || x === "Q" || x === "R" || x === "S") {
    time += 8;
  } else if (x === "T" || x === "U" || x === "V") {
    time += 9;
  } else if (x === "W" || x === "X" || x === "Y" || x === "Z") {
    time += 10;
  }
}

console.log(time);

//2941번

//1316번
