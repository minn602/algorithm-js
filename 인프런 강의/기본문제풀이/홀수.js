//1. 홀수 구해서 합 구하기
//2. 홀수들 중에서 최소값 찾기
function solution(arr) {
  let answer = [];
  let total = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      total += arr[i];
      answer[0] = total;
      if (arr[i] < min) {
        min = arr[i];
        answer[1] = min;
      }
    }
  }
  //중간 중간에 answer에 추가없이
  //answer.push(total, min) 으로도 추가 가능
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
