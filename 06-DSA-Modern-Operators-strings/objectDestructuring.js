const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  orderDelivery: function ({ time, address }) {
    console.log(time, address);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Airoli",
  mainIndex: 2,
  starterIndex: 2,
});

//! Destructing Restaurant Object => key:Your Name(Default)
const {
  name: restarantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restarantName, hours, tags);

//! Default Values
const { menu = [], starterMenu: starter } = restaurant;
console.log(menu, ``, starter);

//! Mutating Variables With Destructuring Objects

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);

console.log(a, b);

//! Nested Objects

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
