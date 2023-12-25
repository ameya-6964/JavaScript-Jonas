const airIndia = {
  airline: "Tata Airways",
  iataCode: "IN",
  booking: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} Booked an Seat On ${this.airline} From ${this.iataCode} Flight Number Is ${flightNum}`
    );
    this.booking.push({
      flight: `${this.iataCode} ${flightNum}`,
      passengerName,
    });
  },
};

airIndia.book(2390, "Ameya");
airIndia.book(123, "Jayesh");
console.log(airIndia);
const indigoAirways = {
  airline: "Indigo Airways",
  iataCode: "IN SW",
  booking: [],
};

const book = airIndia.book;
book.call(indigoAirways, 23231, "Tushar");
book.call(indigoAirways, 23231, "Suraj Golu");

console.log(indigoAirways);

const swissAirways = {
  airline: "Swiss Air Lines",
  iataCode: "SW",
  booking: [],
};

book.call(swissAirways, 12312, "Akshay Terse");

console.log(swissAirways);

// Apply Method => Same As call But Takes array Of Arguments Not Used Most Of The Times

const flightData = [122312, "Tanmay Bhangre"];
book.apply(swissAirways, flightData);
console.log(swissAirways);
