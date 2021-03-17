function solution(arr) {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < answer) {
      answer = arr[i];
    }
  }
  return answer;
}

solution([5, 3, 7, 11, 2, 15, 17]);

function solution(arr) {
  let answer;
  //최소값 초기화 -> 올 수 있는 가장 큰 수로 설정
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  answer = min;
  return answer;
}

//Math의 min, max 메소드를 활용하여 최소값, 최대값 구할 수 있음
//해당 메소드의 인자로는 숫자 요소들만 들어갈 수 있어 스프레드 연산자로 배열에 담긴 요소들을 나열해줌
function solution(arr) {
  let answer = Math.min(...arr);
  //Math.min.apply(null, arr)
  return answer;
}
