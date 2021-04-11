function solution(mat) {
  let answer = 0;
  for (let i = 0; i < mat.length; i++) {
    answer += mat[i][i];
    answer += mat[i][mat.length - i - 1];
  }
  if (mat.length % 2 === 1) {
    answer -= mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  }
  return answer;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

solution(mat);
