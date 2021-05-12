//주어진 배열의 누적값

var runningSum = function (nums) {
  let answer = [];
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < i + 1; j++) {
      x += nums[j];
      answer.push(x);
    }
  }
  return answer;
};
