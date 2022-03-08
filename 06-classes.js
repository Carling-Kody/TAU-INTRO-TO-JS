class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }
}
const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie.name);
