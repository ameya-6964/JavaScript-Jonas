//! Without Arrays Problems

const friend1 = "Jayesh";
const friend2 = "Tushar";
const friend3 = "Suraj";

//! 1st DataStructure => Arrays

const friends = ["Jayesh", "Tushar", "Suraj"];

console.log(friends[0]); //Jayesh
console.log(friends[1]); //Tushar
console.log(friends[2]); // Suraj

//! 2nd Syntax
const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers); //[ 1, 2, 3, 4, 5, 6 ]

/* ! Array Mutation
! Only Primitive Values Are Immutable and Non Primitive Are Mutable
! But You Cannot Change Entire Array 
! for eg :- const friends = ["Jayesh", "Tushar", "Suraj"];
! friends = ["BOB","MARLEY"] :- Type Error
! What You Can Do Is friends[0] = "BOB"
! friends[1] = "MARLEY"
*/
friends[2] = "Gaurav";
console.log(friends[2]); // Gaurav

//! Diffrent Values In Array
const firstName = "Ameya";
const mixedValues = [firstName, "Belvalkar", 2023 - 1997, friends];

console.log(mixedValues); //[ 'Ameya', 'Belvalkar', 26, [ 'Jayesh', 'Tushar', 'Gaurav' ] ]
console.log(mixedValues[3]); // [ 'Jayesh', 'Tushar', 'Gaurav' ]

/* 
 ! EXERCISE
*/

const years = [1990, 2000, 2022, 2013, 2015, 2016];

const calculateAge = (birthYear) => {
  const age = 2023 - birthYear;
  return age;
};

/* console.log(calculateAge(years[0])); // 33
console.log(calculateAge(years[2])); // 1
console.log(calculateAge(years[3])); // 10
 */
const selectedAges = [
  calculateAge(years[0]),
  calculateAge(years[3]),
  calculateAge(years[2]),
];

console.log(selectedAges);
