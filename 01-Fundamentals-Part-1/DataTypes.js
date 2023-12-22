//! Values Are Only Primitive When They Are Not Objects
/*
 * Javascript Is Dynamically Typed Language\
 * That Means Type Of Variable Is Not Neccessary To Be Used
 */

//! Number (Both floating and integers)
let number = 1;

//! Strings
let firstName = `Ameya`;

//! Booleans
let isMarried = false;

//! Undefined => Value Taken By Variable That Is Not Yet Defined
let lastName;

//! Null => Also Means Empty Value
let salary = null;

//! BigInt => Very Big Integers
let bigNumber = 1212121212121212;

/* PRACTICE */

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(`typeOf javascriptIsFun Variable ${typeof javascriptIsFun}`);

console.log(typeof 12); //? number
console.log(typeof `12`); // ? string
console.log(typeof undefined); // ? undefine
console.log(typeof null); // ? object

//! Dynamic Typing

javascriptIsFun = "Ameya";
console.log(`typeOf javascriptIsFun Variable ${typeof javascriptIsFun}`);
