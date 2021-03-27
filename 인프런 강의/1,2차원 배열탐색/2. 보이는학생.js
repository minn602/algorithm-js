function solution(arr) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  console.log(max);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer.push(max);
    }
  }
  return answer.length;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);

function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer++;
    }
  }
  return answer;
}
