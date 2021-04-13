function solution(str) {
  let answer = "";
  let count = 1;
  //맨마지막 글자를 비교하기 위해 임의의 빈스트링 추가
  str = str + " ";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      answer += str[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

solution("KKHSSSSSSSE");
