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
//왼쪽과 오른쪽에서 접근하게 될 인덱스 값을 구해서 인덱스로 접근한 요소 값의 합을 이용하여서 조건에 맞게 인덱스의 위치를 조정하여 풀이하는 방법
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

//1. 문제
//정렬된 배열을 받고 배열에서 유니크한 값들의 갯수를 세는 함수를 작성해라. 배열안엔 음수값이 있을 수도 있다(정렬된)

//2. 접근방법
// 왼쪽끝과 오른쪽 끝의 인덱스를 먼저 변수에 선언한 후 두 인덱스로 접근한 값들의 뺄셈값이 0 이되면 왼쪽인덱스 = 오른쪽인덱스 +1이되고 count 변수에 +1 해준다.
// 뺄셈값이 음수면 오른쪽인덱스를 1 낮추고 양수면 왼쪽인덱스를 1 높인다. 이는 왼쪽이 오른쪽보다 작은 경우까지 계속 반복한다.

function countUniqueValues(arr) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 0) {
    return count;
  }

  while (left < right) {
    let sub = arr[left] - arr[right];

    if (sub === 0) {
      count += 1;
      left = right + 1;
    } else if (sub < 0) {
      right--;
      count += 1;
    } else {
      left++;
      count += 1;
    }
  }
  return count;
}

countUniqueValues([1, 1, 1, 1, 2]); //2
countUniqueValues([-2, -1, -1, 0, 1]); //4
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7이 나와야 되는데 10이 나옴

//colt풀이방법
// 왼쪽 끝 인덱스(i)와 그 인덱스에 +1 한 인덱스(j) 의 값을 비교하여 같으면 j+1이 되고(j는 루프를 돌며 바뀌므로 이 경우는 조건을 달아줄 필요없음.) 계속 비교하여서 다른 경우 i +1 이 되고 해당 위치의 값은 j가 가리키는 값으로 대체됨.
// 다시 비교하여서 결국은 i+1이 정답으로 리턴된다(i가 지나온 자리에는 유니크한 값들이 채워지게됨)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
