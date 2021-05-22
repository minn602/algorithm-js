var subtractProductAndSum = function (n) {
  const arr = n.toString().split("");
  //각각의 변수에 값을 할당해줘야함
  let product = parseInt(arr[0]),
    sum = parseInt(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    product *= parseInt(arr[i]);
    sum += parseInt(arr[i]);
  }
  return product - sum;
};
