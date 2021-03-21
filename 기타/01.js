function solution(arr) {
  let answer;
  let arr2 = arr.map((el) => el.split("~"));
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let arrive,
    leave = "";
  for (let i = 0; i < arr2.length; i++) {
    let arrivalHour = arr2[i][0].slice(0, 2);
    if (arr2[i][0].slice(0, 2) >= max) {
      max = arr2[i][0].slice(0, 2);
      arrive = arr2[i][0];
    }

    let leaveHour = arr2[i][1].slice(0, 2);
    if (arr2[i][1].slice(0, 2) <= min) {
      min = arr2[i][1].slice(0, 2);
      leave = arr2[i][1];
    }
  }
  answer = arrive + " ~ " + leave;

  return answer;
}

solution(["12:00~23:59", "11:00~18:00", "14:00~20:00"]);
