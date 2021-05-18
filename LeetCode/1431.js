var kidsWithCandies = function (candies, extraCandies) {
  let answer = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }

  for (let x of candies) {
    if (x + extraCandies >= max) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
};
