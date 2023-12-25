/* 
const greet = function (greeting) {
  return function (firstName) {
    console.log(`${greeting} ${firstName}`);
  };
};

const hey = greet("Hey");
hey("Ameya");
hey("Jayesh");

greet("Hello")("Wierd Looking Function"); 

*/

//! Arroy Syntax
const greet = (greeting) => {
  return (firstName) => {
    console.log(`${greeting} ${firstName}`);
  };
};

const hey = greet("Hey");
hey("Ameya");
hey("Jayesh");
greet("Hello")("Wierd Looking Function");
