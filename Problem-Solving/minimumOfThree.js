let a = 30;
let b = 20;
let c = 10;

let result = findMinimumOfThree(a, b, c);
console.log(result);

function findMinimumOfThree(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < c) {
    return b;
  } else {
    return c;
  }
}
