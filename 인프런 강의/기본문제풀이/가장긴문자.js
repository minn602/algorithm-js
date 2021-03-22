function solution(arr) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  console.log(max);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      answer = arr[i];
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
solution(str);
