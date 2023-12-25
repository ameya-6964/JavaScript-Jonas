"use strict";

//! This Function Is in Global Scope
// This Function Will Create Its Own Execution Context
// And Will Have Access To Scope Of Its Parent Which Is Global Scope
// But It Wont Have Access Of millenial variable
// NOTE => You Can Only Access Variable From Children To Parent
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  //! printAge Function Will Get Access To Every Variable Of Parent And Its Parent Scope
  //! i.e => scope Of calcAge And Scope Of calcAge Parent
  function printAge() {
    console.log(
      `Greetings ${firstName} , Your Age Is ${age}, You Are Born In ${birthYear}`
    );

    if (birthYear >= 1981 && birthYear <= 1996) {
      var iAmFunctionScope;
      let millenial = `Oh You Are A Millenial, You Are Born In ${birthYear}`;
      console.log(millenial);
    } else {
      let millenial = `Oh You Are Not A Millenial, You Are Born In ${birthYear}`;
      console.log(millenial);
    }
    // console.log(millenial); // millenial is not defined

    //! iAmFunctionScope is made using var therefore it is scoped to function in which it is created which is printAge Function
    //! Therefore Accessible in printAge Function
    iAmFunctionScope = true;
    console.log(iAmFunctionScope);
  }
  printAge();
  return age;
}

const firstName = "Ameya";
calcAge(1997);
// printAge(); in ES6 Function Are Also Bloked Scope (ONLY IN STRICT MODE) printAge is not defined
