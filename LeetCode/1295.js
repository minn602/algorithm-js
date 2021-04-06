//인자에서 짝수 자리수 출력
//내풀이
function solution(arr) {
  let answer = [];
  for (let num of arr) {
    const digits = num.toString().length;
    if (digits % 2 === 0) {
      answer.push(Number(num));
    }
  }
  return answer;
}

//다른사람 풀이
function solution(arr) {
  const arr1 = arr.filter((el) => {
    return el.toString().length % 2 === 0;
  }).length;
  return arr1;
}

solution([555, 901, 482, 1771]);
