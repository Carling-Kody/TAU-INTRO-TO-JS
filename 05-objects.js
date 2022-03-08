//literals
const cookie = {
  name: "chocolate chip",
  size: "small",
  type: "chip",
  flavor: "chocolate",
  price: 2.5,
  isGlutenFree: false,
  "+yummy": true,
};

console.log(cookie.name);
cookie.name = "chip chocolate";
console.log(cookie.name);
console.log(cookie["+yummy"]);
