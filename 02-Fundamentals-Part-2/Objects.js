//! Array Of Ameyas Information,But Information Is Lacking In This Array

const ameyaArray = [
  "Ameya",
  "Belvalkar",
  2023 - 1997,
  "Student",
  ["Jayesh", "Tushar", "Suraj"],
];

//! Objects Solves This Issue
//! It Follows key:value Pairs, it is Known As Object Literal Syntax
const ameyaObject = {
  firstName: "Ameya",
  lastName: "Belvalkar",
  age: 2023 - 1997,
  job: "Student",
  friends: ["Jayesh", "Tushar", "Suraj"],
};

//! How To Read From Objects => Order Of Values Dosent Matter

//? DOT operator
console.log("Using . Operator", ameyaObject.firstName);
console.log("Using . Operator", ameyaObject.age);

//! Adding key:values to Object Using [] Operator
ameyaObject.location = "Airoli";
console.log(ameyaObject);

//? [] "square Bracket Notation"

console.log("Using [] Notaion", ameyaObject["firstName"]);
console.log("Using [] Notaion", ameyaObject["age"]);

//! Adding key:values to Object Using [] Operator
ameyaObject["isMarried"] = false;

console.log(ameyaObject);
