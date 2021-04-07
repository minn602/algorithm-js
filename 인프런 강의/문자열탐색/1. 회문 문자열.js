function solution(str) {
  let arr = str.toLowerCase().split("");
  if (arr === arr.reverse()) {
    return "YES";
  } else {
    return "NO";
  }
}

solution("gooG");

//반복문을 돌면서 앞뒤를 비교하는 방식
function solution(str) {
  let s = str.toLowerCase();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (s[i] !== s[str.length - i - 1]) {
      return "NO";
    } else {
      return "YES";
    }
  }
}
