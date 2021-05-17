var defangIPaddr = function (address) {
  let answer = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      answer += "[.]";
    } else {
      answer += address[i];
    }
  }

  return answer;
};

//replace 메소드는 첫번째 요소만 바꿔준다
//전체를 바꾸길 원하면 정규표현식을 사용하는게 간편하다
var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};
