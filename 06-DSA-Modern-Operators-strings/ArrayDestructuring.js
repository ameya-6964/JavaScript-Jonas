// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
};

const arr = [2, 5, 6, 7];

//! Without Destructuring
/* 
let a = arr[0]; 
let b = arr[1]; 
let c = arr[2]; 
let d = arr[3]; 
console.log(a, b, c, d); // 2 5 6 7
*/

//! With Destructuring => Original Array Is Not Affected
// let [a, b, c, d] = arr;
// console.log(a, b, c, d); // 2 5 6 7

// const [first, second] = restaurant.categories;
// console.log(first, second); //Italian Pizzeria

//! Skipping Elements
const [first, , third] = restaurant.categories;
console.log(first, third); //Italian Vegetarian

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main); // Garlic Bread Pizza

//! Skipping Elements In Nested Array
const nested = [1, 2, 3, [5, 6]];

/* const [i, , , j] = nested;
console.log(i, j); */

const [i, , , [j, k]] = nested;
console.log(i, j, k);

// Default Values in destructuring

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
