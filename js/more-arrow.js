// arrow function for two or more parameters
// arrow function is same for two or more parameters
const sum = (first, second) => first + second;
// for string
const fullName = (firstName, lastName) => firstName + " " + lastName;
const multiply = (a, b) => a * b;

const total = multiply(10, 10);
//console.log(total);
// -----------
// no parameter arrow function
const getPI = () => 3.14;

// ------
// one parameter arrow function
const doubleIt = (a) => a * 2;
// simple way of one parameter arrow function
const fiveTimes = (a) => a * 5;

// -------
// multiline arrow function
// in multi line arrow function we need to use return inside curly brace
const doMath = (x, y, z) => {
  const firstAdd = x + y;
  const secondAdd = y + z;
  const multiply = firstAdd * secondAdd;
  const result = multiply / 2;
  return result;
};
