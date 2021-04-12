//1. 왼쪽부터 순회하며 t가 아니면 1을 누적한 값 추가 -> 자신을 기준으로 왼쪽에 위치한 t와의 거리 계산
//2. 오른쪽부터 순회하며 t가 아니면 1을 누적한 값 추가 -> 자신을 기준으로 오른쪽에 위치한 t와의 거리 계산
//3. 1과 2 중 최소값 정답에 추가
function solution(s, t) {
  let answer = [];
  let flag = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      flag = 0;
      answer.push(flag);
    } else {
      flag++;
      answer.push(flag);
    }
  }
  flag = 0;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      flag = 0;
      answer[j] = 0;
    } else {
      flag++;
      answer[j] = Math.min(answer[j], flag);
    }
  }
  return answer;
}

solution("teachermode", "e");
