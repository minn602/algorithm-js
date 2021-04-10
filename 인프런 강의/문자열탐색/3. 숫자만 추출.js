function solution(str) {
  let answer;
  //알파벳이 아닌 것만 찾는 정규표현식
  let regExr = /[^a-z]/gi;
  //match 메소드는 결과값을 배열로 리턴함
  answer = parseInt(str.match(regExr).join(""));
  return answer;
}

solution("g0en2T0s8eSoft");

function solution(str) {
  let answer = "";
  for (let s of str) {
    //숫자가 아닌지 확인하는 메소드
    if (!isNaN(s)) {
      answer += s;
    }
  }
  return parseInt(answer);
}
