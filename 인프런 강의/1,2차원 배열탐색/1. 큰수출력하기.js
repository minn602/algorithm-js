function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
    if (i === 0) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

solution([7, 3, 9, 5, 6, 12]);
