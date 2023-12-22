//! Function Calling Another Function From Inside Is Called As CallBack Function

function cutFruitsPeices(fruit) {
  return fruit * 4;
}

function fruitsProcessor(apples, oranges) {
  const applePieces = cutFruitsPeices(apples);
  const orangePieces = cutFruitsPeices(oranges);
  const juice = `Juice With ${apples} Apples, Which Has ${applePieces} Apple Pieces and ${oranges} Oranges, Which Has ${orangePieces} Orange Pieces `;
  return juice;
}

const firstJuice = fruitsProcessor(3, 4);
console.log(firstJuice);
