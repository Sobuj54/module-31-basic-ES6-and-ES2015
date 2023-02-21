// writing string in different forms
// 1. using single cout ''
const person1 = "sobuj";
// 2. using double count ""
const person2 = "ashik";
// 3. using backtick `` backtick is used from ES6 version
const person3 = `maruf`;
// one way of creatin multi line
const multiline = "multiline text\n" + "multiline code\n" + "last line";
console.log(multiline);
// easy way to create multiline with backtick this way of making string is called template string
const newMultiline = `multi text
multi code
last line`;
//console.log(newMultiline);
// -----------
const a = 20;
const b = 30;
const sum = "sum of : " + a + " and " + b + " is: " + (a + b);
//console.log(sum);
// using backtick this becomes more easy and dinamic
const newSum = `sum of ${a} and ${b} is ${a + b}`;
console.log(newSum);
