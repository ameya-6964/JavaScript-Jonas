//! Loops Are Used To Do Certain Task Multiple Times

//! FOR LOOP :- Used Most OF The Times
/* for (let a = 0; a <= 10; a++) {
  console.log(`I Lifted Weight ${a} Times 🏋️`);
}

 */

//! Loop Through Arrays

const ameyaArray = [
  "Ameya",
  "Belvalkar",
  2023 - 1997,
  "Student",
  ["Jayesh", "Tushar", "Suraj"],
];

for (let i = 0; i < ameyaArray.length; i++) {
  const element = ameyaArray[i];

  /*   
      !OUTPUT
      Ameya
      Belvalkar
      26
      Student
      [ 'Jayesh', 'Tushar', 'Suraj' ] 
*/
}

const years = [1991, 1992, 1993, 1994, 1997];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2023 - years[i];
}

console.log(ages); //[ 32, 31, 30, 29, 26 ]

//! continue and break Statements in Loops

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i); //! 4 Will Be Skipped
}

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i); //! Loop Will Only Run till i=3
}
