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
console.log(airIndia.booking);
const indigoAirways = {
  airline: "Indigo Airways",
  iataCode: "IN SW",
  booking: [],
};
const book = airIndia.book;
const bookIndigo = book.bind(indigoAirways);

bookIndigo(12123, "Tanmay Bhangre");
console.log(indigoAirways);
