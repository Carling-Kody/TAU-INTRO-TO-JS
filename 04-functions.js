function sum(a, b) {
  return a + b;
}
console.log(sum(10, 10));

function product(a, b) {
  return a * b;
}

console.log(product(12, 12));

const bigProduct = product(5353, 134534);
console.log(bigProduct);
// getting the type of a variable
console.log(typeof bigProduct);

// Anonymouse function
// 1000 miliseconds = 1 second
setTimeout(function () {
  console.log("Hey! You rock!!!");
}, 1000);

// Arrow function
// 1000 miliseconds = 1 second
setTimeout(() => {
  console.log("Hey! You rock Arrow!!!");
}, 1000);

//if you have 1 line of code, you can drop the curly braces
// the => is the return statement!

setTimeout(() => console.log("Hey! You rock Arrow 2!!!"), 1000);

// do not use arrow functions to look fancy!!
