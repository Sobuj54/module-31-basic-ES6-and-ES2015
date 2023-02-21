const largest = Math.max(20, 45, 87, 2);
//console.log(largest);
const numbers = [10, 25, 45, 6, 32];
// ... is used to spread numbers of an array
// spreading means to take out numbers from the array
const biggest = Math.max(...numbers);
console.log(...numbers);
console.log(biggest);

// --------------
const number1 = [...numbers];
numbers.push(55);
number1.push(100);
// console.log(number1, numbers);
// another way of adding numbers in newly created array
const number2 = [10, 25, ...numbers, 100];
console.log(number2);
