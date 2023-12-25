"use strict";

//! Without Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numOfPassengers = 1,
  price = 199 * numOfPassengers
) {
  //Before ES6
  // numOfPassengers = numOfPassengers || 1;
  // price = numOfPassengers * price || numOfPassengers * 199;

  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("AIRINDIA");
createBooking("AUSAIR", 2, 800);
createBooking("ENGAIR", 2);
