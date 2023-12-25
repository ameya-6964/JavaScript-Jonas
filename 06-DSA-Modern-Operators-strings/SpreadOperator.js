//! Before Spread Operator

const arr = [7, 8, 9];

const beforeES6 = [1, 2, arr[0], arr[1], arr[2]];

console.log(beforeES6); //[ 1, 2, 7, 8, 9 ]

//! After Spread Operator

const array = [7, 8, 9];

const betterArray = [1, 2, ...array];

console.log(betterArray); //[ 1, 2, 7, 8, 9 ]

console.log(...betterArray); // 1 2 7 8 9
