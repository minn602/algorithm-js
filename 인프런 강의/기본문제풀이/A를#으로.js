//내풀이
function solution(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arr.splice(i, 1, "#");
    }
    answer = arr.join("");
  }
  return answer;
}

solution("BANANA");

//1. for문을 활용한 방식
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }
  return answer;
}

//2. replace 메소드 활용
function solution(str) {
  let answer;
  answer = str.replace(/A/g, "#");
  return answer;
}
