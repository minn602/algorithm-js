function solution(str) {
  const arr = str.split("");
  if (arr === arr.reverse()) {
    return "YES";
  } else {
    return "NO";
  }
}

solution("found7, time: study; Yduts; emit, 7Dnuof");

//reverse() 메소드를 사용하게 되면 새로운 배열을 생성하여 새로운 참조값을 반환하는게 아니라
//원본 배열을 참조하고 그 참조를 반환하기 때문에 위와같이 비교하면 의도한 결과값을 반환하지 않는다

function solution(str) {
  //대소문자 구분하지 않고 알파벳 외 문자들은 제외
  const str1 = str.toLowerCase().replace(/[^a-z]/g, "");
  console.log(str1);
  if (str1.split("").reverse().join("") === str1) {
    return "YES";
  } else {
    return "NO";
  }
}

solution("found7, time: study; Yduts; emit, 7Dnuof");
