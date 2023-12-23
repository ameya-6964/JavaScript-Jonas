const friends = ["Jayesh", "Tushar", "Suraj"];
console.log(friends); // [ 'Jayesh', 'Tushar', 'Suraj' ]
//! push => Add Element To End Of An Array and returns length of Array => mutates Original Array
friends.push("Gaurav");
console.log(friends); //[ 'Jayesh', 'Tushar', 'Suraj', 'Gaurav' ]

//! unshift => Add Element To Start Of An Array and returns length of Array => mutates Original Array

friends.unshift("Deepak");
console.log(friends); //[ 'Deepak',Jayesh', 'Tushar', 'Suraj', 'Gaurav' ]

//! pop => Remove Last Element Of Array and returns removed element
friends.pop();
console.log(friends); // [ 'Deepak', 'Jayesh', 'Tushar', 'Suraj' ]

//! shift => Removes First Element Of Array and returns Removed Element

friends.shift();
console.log(friends); // [ 'Jayesh', 'Tushar', 'Suraj' ]

//! Index Position Of Certain Element, If Not Found Returns -1

console.log(friends.indexOf("Tushar")); // 1

//! Check If Element Is Present In Array Or Not Returns Boolean Value

console.log(friends.includes("Jayesh")); //true
