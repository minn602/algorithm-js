//내풀이
function solution(day, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString()[1] === day.toString()) {
      answer += 1;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

function solution(day, arr) {
  let answer = 0;
  //for...of 구문 사용
  for (let x of arr) {
    //% 나머지 적용
    if (x % 10 === day) {
      //answer += 1; 대신 ++로 적용할 수 있다.
      answer++;
    }
  }
  return answer;
}
