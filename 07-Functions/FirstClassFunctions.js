const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//! HOF

const transformer = function (str, fn) {
  console.log(`Orignal String: ${str}`);
  console.log(`Original String: ${fn(str)}`);
  console.log(`Transformed By ${fn.name}`);
};

transformer("JavaScript Is Best", upperFirstWord);

transformer("JavaScript Is Best", oneWord);
