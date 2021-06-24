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
