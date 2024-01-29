let side1 = 7;
let side2 = 3;
let side3 = 1;

let result = isValidTriangle(side1, side2, side3);
console.log(result);

function isValidTriangle(side1, side2, side3) {
  let biggerSide;
  if (side1 > side2 && side1 > side3) {
    biggerSide = side1;
  } else if (side2 > side3) {
    biggerSide = side2;
  } else {
    biggerSide = side3;
  }
  if (biggerSide === side1 && side2 + side3 === biggerSide) {
    return "Valid Triangle";
  } else if (biggerSide === side2 && side1 + side3 === biggerSide) {
    return "Valid Triangle";
  } else if (biggerSide === side3 && side2 + side1 === biggerSide) {
    return "Valid Triangle";
  } else {
    return "Not a Valid Tringle";
  }
}
