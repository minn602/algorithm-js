var smallerNumbersThanCurrent = function (nums) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i] && i !== j) {
        count++;
      }
    }
    answer.push(count);
    count = 0;
  }
  return answer;
};
