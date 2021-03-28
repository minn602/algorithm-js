function solution(arr, arr1) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr1[i]) {
      answer.push("D");
    } else if (arr[i] === 1 && arr1[i] === 2) {
      answer.push("B");
    } else if (arr[i] === 1 && arr1[i] === 3) {
      answer.push("A");
    } else if (arr[i] === 2 && arr1[i] === 1) {
      answer.push("A");
    } else if (arr[i] === 2 && arr1[i] === 3) {
      answer.push("B");
    } else if (arr[i] === 3 && arr1[i] === 1) {
      answer.push("B");
    } else if (arr[i] === 3 && arr1[i] === 2) {
      answer.push("A");
    }
  }
  return answer;
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);

function solution(arr, arr1) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr1[i]) {
      answer.push("D");
      //A가 이기는 경우에 대해서 정의하고 이외의 경우는 else로 처리
    } else if (
      (arr[i] === 1 && arr1[i] === 3) ||
      (arr[i] === 2 && arr1[i] === 1) ||
      (arr[i] === 3 && arr1[i] === 2)
    ) {
      answer.push("A");
    } else {
      answer.push("B");
    }
  }
  return answer;
}
