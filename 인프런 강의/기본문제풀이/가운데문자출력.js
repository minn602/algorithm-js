function solution(str) {
  let answer;
  if (str.length % 2 === 1) {
    answer = str[Math.floor(str.length / 2)];
  } else {
    answer =
      str[Math.floor(str.length / 2) - 1] + str[Math.floor(str.length / 2)];
  }
  return answer;
}

solution("study");
solution("good");

function solution(str) {
  let answer;
  let mid = Math.floor(str.length / 2);
  console.log(mid);
  if (str.length % 2 === 1) {
    //substring 메소드도 사용가능 substring(mid, mid+1) -> 인덱스 위치로 조정
    answer = str.substr(mid, 1);
  } else {
    answer = str.substr(mid - 1, 2);
  }
  return answer;
}
