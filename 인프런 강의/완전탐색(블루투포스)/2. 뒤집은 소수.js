function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let num = Number(x.toString().split("").reverse().join(""));
  }
  return answer;
}

solution([32, 55, 62, 20, 250, 370, 200, 30, 100]);

//강의 풀이
function isPrime(num) {
  if (num === 1) return false;
  //소수는 1과 자기자신만 약수
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  let reversed = 0;
  for (let x of arr) {
    while (x) {
      let remain = x % 10;
      reversed = reversed * 10 + remain;
      x = parseInt(x / 10);
    }
    if (isPrime(reversed)) answer.push(reversed);
  }
  return answer;
}
