//내풀이
function solution(arr) {
  let answer;
  let total = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    total = 0;
    const arr1 = arr[i].toString().split("");
    for (let x of arr1) {
      total += parseInt(x);
    }
    if (total >= max) {
      max = total;
      //답이 되는 조건에 해당하지 못하는 오류가 발생함
      answer = arr[i];
    }
  }
  return answer;
}

solution([128, 460, 603, 40, 521, 137, 123]);

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    //let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
