var shuffle = function (nums, n) {
  let answer = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i < n) {
      answer[2 * i] = nums[i];
    } else {
      answer[2 * (i - n) + 1] = nums[i];
    }
  }
  return answer;
};
