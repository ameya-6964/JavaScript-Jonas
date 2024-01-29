let a = 5;
let b = 12;
let c = 10;

let result = isValidTriangle(a, b, c);
console.log(result);

function isValidTriangle(side1, side2, side3) {
  if (a + b > c && a + c > b && b + c > a) {
    return "Valid Triangle";
  } else {
    return "Not a Valid Triangle";
  }
}
