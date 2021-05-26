var decompressRLElist = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || i % 2 === 0) {
      for (let j = 1; j <= nums[i]; j++) {
        answer.push(nums[i + 1]);
      }
    }
  }
  return answer;
};
