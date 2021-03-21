function solution(str) {
  let answer = str.toUpperCase();
  return answer;
}

solution("ItisTimeToStudy");

function solution(str) {
  let answer = "";
  for (let s of str) {
    let code = s.charCodeAt();
    if (code >= 97 && code <= 122) {
      answer += String.fromCharCode(code - 32);
    } else {
      answer += s;
    }
  }
  return answer;
}
