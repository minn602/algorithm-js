//문자열의 k 갯수의 단어만 출력
function solution(s, k) {
  const arr = s.split(" ");
  let answer = [];
  for (let i = 0; i < k; i++) {
    answer.push(arr[i]);
  }
  return answer.join(" ");
}

solution("Hello how are you Contestant", 4);

function solution(s, k) {
  return s.split(" ").slice(0, k).join(" ");
}
