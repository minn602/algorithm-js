//나의 풀이
// function solution(n) {
//   var answer = '';
//   if(n%2 === 1) {
//     answer = '수박'.repeat(Math.floor(n/2))+'수';
//   } else {
//     answer = '수박'.repeat(Math.floor(n/2));
//   }
//   return answer;
// }

//메소드 사용을 최소화한다.
function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
      answer += "박";
    }
    if (i % 2 === 0) {
      answer += "수";
    }
  }
  return answer;
}
