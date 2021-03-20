//내풀이
function solution(str, cha) {
  let answer = 0;
  for (let x of str) {
    if (x === cha) {
      answer += 1;
    }
  }
  return answer;
}

solution("COMPUTERPROGRAMMING", "R");

function solution(str, cha) {
  //cha를 구분자로 끊어서 구분자의 갯수를 구할 수 있다.
  let answer = str.split(cha).length - 1;
  return answer;
}
