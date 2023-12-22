/* "use strict";

function logger() {
  console.log("I AM LOGGER");
}

logger();

function loggerWithName(userName) {
  console.log(`I AM ${userName} LOGGER`);
}

loggerWithName(`Ameya`);
 */

function fruitsProcessor(apples, oranges) {
  const juice = `Juice With ${apples} apples and ${oranges} oranges `;
  return juice;
}

const appleOrangeJuice = fruitsProcessor(3, 4);
console.log(appleOrangeJuice); //Juice With 3 apples and 4 oranges

//! ... opeartor takes all Arguments From Function Call and Spreads Them
function fruitProcessor(...fruits) {
  return `Juice Made From Fresh ${fruits} Fruits Enjoy 😇`;
}
const mixedFruits = fruitProcessor("Apple", "Kiwi", "Mango");

console.log(mixedFruits); //Juice Made From Fresh Apple,Kiwi,Mango Fruits Enjoy 😇
