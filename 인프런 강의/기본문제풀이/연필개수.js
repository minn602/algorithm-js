//내풀이
function solution(n) {
  let answer;
  if (n % 12 === 0) {
    answer = Math.floor(n / 12);
  } else {
    answer = Math.floor(n / 12) + 1;
  }
  return answer;
}

solution(25);
solution(178);

//상황에 맞게 floor, ceil, round 메소드 잘 활용하기
function solution(n) {
  let answer = Math.ceil(n / 12);
  return answer;
}
