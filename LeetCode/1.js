// 주어진 배열의 임의의 두수를 합한 결과가 주어진 타겟 값과 같았을때의 인덱스를 리턴하는 것으로
// 인덱스 값이 필요하기에 i를 사용한 for문을 사용하고
// 임의의 두값을 비교해야되기에 이중포문을 사용함

var twoSum = function (nums, target) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer.push(i, j);
      }
    }
  }
  return answer;
};

///
