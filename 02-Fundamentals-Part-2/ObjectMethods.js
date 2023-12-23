const ameyaObject = {
  firstName: "Ameya",
  lastName: "Belvalkar",
  birthYear: 1997,
  job: "Student",
  hasLiscence: true,
  friends: ["Jayesh", "Tushar", "Suraj"],
  //! Adding Function Expression Inside Objects
  // NOTE => YOu Cannot Add Normal Function Declaration
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
  calcAge2: function () {
    //console.log("this is Refering To This Object", this);
    return 2023 - this.birthYear;
  },
  calcAge3: function () {
    //console.log("this is Refering To This Object", this);
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    const summary = `Person Name is ${this.firstName} ${this.lastName} Born In ${this.birthYear}, Current Age Is ${this.age}, ${this.firstName} has ${this.friends.length} Friends`;
    return summary;
  },
};

const age = ameyaObject.birthYear;

const ameyaAge = ameyaObject.calcAge(age);
const ameyaAge1 = ameyaObject["calcAge"](age);

const ameyaAgeWithThis = ameyaObject.calcAge2();
const ameyaAgeWithThis2 = ameyaObject.calcAge3();
const ameyaInfo = ameyaObject.getSummary();

console.log("With . Operator", ameyaAge);
console.log("With [] Operator", ameyaAge1);
console.log("With This Operator", ameyaAgeWithThis);
console.log("With This Operator New Version", ameyaAgeWithThis2);
console.log(ameyaInfo);

//! NOTE :- this Keyword Always Refers To Object From Which The Method is Called
//! NOTE :- this Keyword Always Refers To Object From Which The Method is Called
//! NOTE :- this Keyword Always Refers To Object From Which The Method is Called
