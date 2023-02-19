// using default parameter
// here num1 and num2 parameters have setted value which is 0 we can set any value
// these pre setted values are called default values
// if we dont send number of arguments equal to number of parameters then default values will take the missing argument
// but if we send equal number of arguments then the default values will not take any part in the whole process
function add(num1 = 0, num2 = 0) {
  const sum = num1 + num2;
  return sum;
}

const total = add(10);
console.log(total);
