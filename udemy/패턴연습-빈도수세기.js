//빈도수 세기 패턴
//anagrams

// 1. 문제내용
// 두 문자열을 인자로 받는 함수는 두번째 문자열이 첫번째의 아나그램인지 판단하는 함수이다. 아나그램이란 다른 형태의 문자로 재배열하는 것이다. (예: cinema -> iceman)

// 2. 해결방법
// 문자열의 빈도수를 조사해서 비교를 한다. (객체 타입의 형태로 문자열을 구조분해해서 바꿔주기)

function validAnagram(str1, str2) {
  // 먼저 length를 비교해서 다르면 리턴한다.
  if (str1.length !== str2.length) {
    return false;
  }

  //주어진 두 문자열의 레터마다의 빈도수를 객체타입으로 만들어준다.
  let obj1,
    obj2 = {};

  for (let s of str1) {
    obj1[s] = obj1[s] ? obj1[s] + 1 : 1;
  }
  for (let s of str2) {
    obj2[s] = obj2[s] ? obj2[s] + 1 : 1;
  }

  //만들어진 첫번째 객체를 반복하면서 두번째 객체의 빈도수와 같은지 체크한다.
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

//위의 코드를 리팩토링한 버젼 -> 객체 선언에 문제가 있었음, 루프 안에서 객체에 키와 값 할당에 문제가 있었음.
function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // 먼저 length를 비교해서 다르면 리턴한다.
  if (str1.length !== str2.length) {
    return false;
  }

  //주어진 두 문자열의 레터마다의 빈도수를 객체타입으로 만들어준다.
  let obj1 = {},
    obj2 = {};

  //해당 문자가 존재하면 1 증가하고 없으면 1할당.
  for (let s of str1) {
    obj1[s] ? (obj1[s] += 1) : (obj1[s] = 1);
  }
  for (let s of str2) {
    obj2[s] ? (obj2[s] += 1) : (obj2[s] = 1);
  }

  //만들어진 첫번째 객체를 반복하면서 두번째 객체의 빈도수와 같은지 체크한다.
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
