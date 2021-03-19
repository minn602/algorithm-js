//내 풀이
//1. 9명 중 7명을 골라서 합이 100이 되는 경우 구하기
// function solution(arr) {
//   let answer = [];
//   let total = 0;

//   for(let i = 0; i <= 7; i++) {
//     let randomIdx = Math.floor(Math.random() * arr.length);
//     console.log(arr[randomIdx]);
//   }
//   return answer;
// }

//2명이 제외가 되므로 이중 for문으로 구한다
//전체합 - 두명의합 = 100 이 되는 조건을 이용하여 준다
function solution(arr) {
  let answer = arr;
  //reduce 메소드를 활용하여 0에 요소를 누적하는 방법
  let sum = arr.reduce((a, b) => a + b, 0);
  //이중for문
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        //j번째 인덱스를 먼저 지워주는 이유?
        //i번째를 먼저 지워주게 되면 뒷자리 요소들의 인덱스가 바뀌어
        //의도와다른 j번째 요소를 지우게 되므로
        //뒤에 위치한 j번째를 먼저 지워준다.
        arr.splice(j, 1);
        arr.slice(i, 1);
      }
    }
  }
  return answer;
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
