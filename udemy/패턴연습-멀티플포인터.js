//multiple pointers pattern

//1. 문제
//정렬된 정수들을 받는 함수를 작성해라. 이함수는 합이 0이 되는 첫번째 쌍을 찾는다. 두 값의 합이 0 이 되는 값들을 배열로 리턴하거나
//값이 없는 경우는 undefined를 반환한다.

//2. 접근방법
//정렬된 배열이기 때문에 같은 인덱스를 이용해서 맨앞과 끝에서 접근해서 그 두 요소의 합이 0이 되는 경우를 찾는다.

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[arr.length - 1 - i] === 0) {
      return [arr[i], arr[arr.length - 1 - i]];
    }
  }
  return undefined;
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); //[-3, 3]
sumZero([-2, 0, 1, 3]); //undefined
sumZero([1, 2, 3]); //undefined

//colt 풀이방법
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
