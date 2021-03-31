//이중 for문으로 각 요소를 서로 비교하면서
//같은 인덱스에 위치한 answer 배열의 요소를 ++하기
function solution(arr) {
  let answer = [1, 1, 1, 1, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

solution([87, 89, 92, 100, 76]);

//answer 배열을 요소가 1인 배열로 초기화 하는 방법
let answer = Array.from({ length: arr.length }, () => 1);
