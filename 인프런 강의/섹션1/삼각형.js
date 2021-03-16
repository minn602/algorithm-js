//내 풀이
//1. 제일 긴 변 찾기
//2. 긴 변 < 나머지 두변의 합 -> yes or no 출력
function solution(a, b, c) {
  let answer;
  let max;
  if (a > b && a > c) {
    max = a;
    if (max < b + c) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  if (b > a && b > c) {
    max = b;
    if (max < a + c) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  if (c > a && c > b) {
    max = c;
    if (max < a + b) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }
  return answer;
}

//삼각형이 될 조건을 이용할 방법 생각하기
function solution(a, b, c) {
  let answer, max;
  //가장 긴 변 구하기
  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (c > max) {
    max = c;
  }

  //삼각형이 될 조건 이용
  const total = a + b + c;
  if (total - max > max) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  return answer;
}
