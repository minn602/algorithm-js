function solution(n) {
  const str = n.toString();
  if (str.includes("3") || str.includes("6") || str.includes("9")) {
    return "짝";
  } else {
    return str;
  }
}

solution(103);
solution(40);
