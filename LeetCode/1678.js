var interpret = function (command) {
  let answer = "";
  const arr = command.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "(" && arr[i] !== ")") {
      answer += arr[i];
    }

    if (arr[i] === "(" && arr[i + 1] === ")") {
      answer += "o";
    }
  }
  return answer;
};
