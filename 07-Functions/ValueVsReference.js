const flight = "AIRIND1212";

const ameya = {
  firstName: "Ameya",
  passport: 21213123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "AIR31313";
  passenger.firstName = `Mr. ${passenger.firstName}`;

  if (passenger.passport === 21213123) {
    console.log(`Checked In`);
  } else {
    console.log(`Wrong Passport`);
  }
};

checkIn(flight, ameya);
//! flight string dosnt Change Because We Are Just Passing Copy Of flight variable in function
console.log(flight);

//! ameya object value Changes Because its object and while Passing Objects We Share Referance Of Object Stored In Memory
console.log(ameya);

//! WARNING This Is What Happens When You Mutate Object In Functions

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(ameya);
console.log(ameya);
// { firstName: 'Mr. Ameya', passport: 60084
// }

checkIn(flight, ameya);
