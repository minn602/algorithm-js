function solution(str) {
  let answer = "";
  for (let s of str) {
    if (str.lastIndexOf(s) !== str.indexOf(s)) {
      answer += s;
    }
  }
  return answer;
}

solution("ksekkset");

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer += str[i];
    }
  }
  return answer;
}

solution("ksekkset");

//indexOf를 사용하여 k의 갯수 알아보기
function solution(str) {
  let answer = 0;
  let kIdx = str.indexOf("k");
  while (kIdx !== -1) {
    answer++;
    kIdx = str.indexOf("k", kIdx + 1);
  }
  return answer;
}
