let a = 8;
let b = 12;
let c = 5;

let result = typeOfTriangle(a, b, c);
console.log(result);

function typeOfTriangle(a, b, c) {
  if (a == b && a == c) {
    return "Equilateral Triangle";
  } else if (
    (a == b && a !== c) ||
    (b == c && b !== a) ||
    (c == a && c !== b)
  ) {
    return "Scalene Triangle";
  } else if (a + b > c && a + c > b && c + b > a) {
    return "Isosceles Triangle";
  } else {
    return "Not a Valid Triangle";
  }
}
