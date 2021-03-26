function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.indexOf(arr[i]));
    if (arr.indexOf(arr[i]) === i) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function solution(arr) {
  let answer = arr.filter((el, idx) => {
    if (arr.indexOf(el) === idx) {
      return el;
    }
  });
  return answer;
}

solution(["good", "time", "good", "time", "student"]);
