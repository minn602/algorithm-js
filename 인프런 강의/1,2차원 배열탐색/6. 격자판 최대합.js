function solution(arr) {
  let answer,
    rowTotal = 0,
    colTotal = 0,
    diagonal = 0;
  let totalArr = [];
  let colArr = [];
  let diaArr = [];
  for (let i = 0; i < arr.length; i++) {
    const total = arr[i].reduce((a, b) => {
      return a + b;
    });
    totalArr.push(total);
    rowTotal = Math.max(...totalArr);
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[j][i]);
      // colTotal += arr[j][i];
      // console.log(colTotal);
      if (i === j) {
        diagonal += arr[i][j];
      }
    }
  }

  return answer;
}

const arr1 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

solution(arr1);

//풀이

function solution(arr) {
  //최대값을 구하기 위한 초기화
  let answer = Number.MIN_SAFE_INTEGER;
  //행과 열의 합 구하기
  let rowTotal = (colTotal = 0);
  for (let i = 0; i < arr.length; i++) {
    //i가 바뀔때마다 합을 초기화해줘야 값이 누적되지 않는다
    rowTotal = colTotal = 0;
    for (let j = 0; j < arr.length; j++) {
      rowTotal += arr[i][j];
      colTotal += arr[j][i];
    }
    //행의 합과 열의 합 중 큰 값을 구하여 재할당해준다
    answer = Math.max(answer, rowTotal, colTotal);
  }

  //대각선 합 구하기
  let leftTotal = (rightTotal = 0);
  for (let i = 0; i < arr.length; i++) {
    leftTotal += arr[i][i];
    rightTotal += arr[i][arr.length - i - 1];
  }
  answer = Math.max(answer, leftTotal, rightTotal);
  return answer;
}

const arr1 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

solution(arr1);
