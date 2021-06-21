//백준에서 인풋값을 받아 node.js로 문제풀기 위한 방법으론 readline 모듈과 fs모듈 두가지 방법이 있다.

//1. 하나의 입력값을 받을때
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//2. 공백으로 구분된 여러값을 한줄에 받을 때
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

//3. 여러값을 각 줄로 나뉘어서 받을 때
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

//4.첫번째 줄에 자연수 n을 받고, 그다음 줄에 공백으로 구분된 n개의 값들을 받을 때
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

//5. 첫번째 줄에 자연수 n을 받고, n줄에 걸쳐 한 줄에 하나씩 값을 입력받을 때
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
