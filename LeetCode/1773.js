var countMatches = function (items, ruleKey, ruleValue) {
  let answer = [];
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === "type") {
      if (items[i][0] === ruleValue) {
        answer.push(items[i]);
      }
    } else if (ruleKey === "color") {
      if (items[i][1] === ruleValue) {
        answer.push(items[i]);
      }
    } else {
      if (items[i][2] === ruleValue) {
        answer.push(items[i]);
      }
    }
  }
  return answer.length;
};
