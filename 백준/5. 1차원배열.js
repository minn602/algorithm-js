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
for (let i = 0; i < result.length; i++) {}
