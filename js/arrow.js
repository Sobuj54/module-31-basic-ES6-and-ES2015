// function declaration
function add(first, second) {
  const total = first + second;
  return total;
}

// variable expression
const roll = 64;
// function expression
const add1 = function add1(first, second) {
  const total = first + second;
  return total;
};
// function expression with  anonymous function
const add2 = function (first, second) {
  const total = first + second;
  return total;
};
// arrow function
const add3 = (first, second) => first + second;

const result = add3(10, 30);
console.log(result);
