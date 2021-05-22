//몇회 반복해야 되는지 모를때, 반복문이 멈추는 조건이 있을 때 -> while문으로 처리

var numberOfSteps = function (num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
      steps++;
    } else {
      num -= 1;
      steps++;
    }
  }
  return steps;
};
