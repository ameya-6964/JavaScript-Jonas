//! Function Declaration => Is Hoisted
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

const ageOfAmeya = calcAge1(1997);
console.log(ageOfAmeya);

//! Function Expression => Is Not Hoisted

const ageCalculator = function (birthYear) {
  const age = 2023 - birthYear;
  return age;
};

const ageOfJayesh = ageCalculator(1998);
console.log(ageOfJayesh);
