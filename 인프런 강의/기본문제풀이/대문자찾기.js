function solution(str) {
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer += 1;
    }
  }
  return answer;
}

solution("KoreaTimeGood");

function solution(str) {
  let answer = 0;
  for (let x of str) {
    //charCodeAt은 각 문자가 가진 고유의 utf-16 code를 반환한다
    let code = x.charCodeAt();
    if (code >= 65 && code <= 90) {
      answer++;
    }
  }
  return answer;
}
