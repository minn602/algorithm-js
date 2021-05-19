var maximumWealth = function (accounts) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      count += accounts[i][j];
    }
    answer.push(count);
    count = 0;
  }
  return Math.max(...answer);
};
