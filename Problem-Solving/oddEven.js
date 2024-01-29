let x = 24;

let result = checkIsOddOrEven(x);
console.log(result);

function checkIsOddOrEven(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
