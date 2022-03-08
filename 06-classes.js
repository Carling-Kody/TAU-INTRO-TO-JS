class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }
  eatCookie() {
    console.log("I am eating a " + this.name);
  }
}
const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie);
console.log(myCookie.name);
myCookie.eatCookie();
