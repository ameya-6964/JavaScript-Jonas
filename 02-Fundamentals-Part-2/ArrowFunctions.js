//! Added In ES6 Update

const ageCalculator = (birthYear) => {
  return 2023 - birthYear;
};

const ageOfAmeya = ageCalculator(1997);
console.log(ageOfAmeya);

/* 
* Alternate One Liner Syntax 
const ageCalculator = birthYear => 2023 - birthYear 
*/

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} Retires In ${retirement} Years`;
};

const ameyaYears = yearsUntilRetirement(1997, "Ameya");
console.log(ameyaYears);
