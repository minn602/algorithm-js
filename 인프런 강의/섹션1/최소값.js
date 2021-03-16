//내풀이
function solution(a, b, c) {
  let answer;
  if (a < b && a < c) {
    answer = a;
  } else if (b < a && b < c) {
    answer = b;
  } else {
    answer = c;
  }
  return answer;
}

//기존 변수 활용해보기
function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  return answer;
}
