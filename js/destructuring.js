const fish = {
  nameis: "king hilsa",
  address: "podda",
  color: "silver",
  phone: "016340248",
  price: 4000,
};
// destructuring object
// in left side of equal sign we need give the same name as in the object property names
const { nameis, address } = fish;
console.log(nameis, address);
// another way
const { age } = { nameis: "abdullah", age: 20, profession: "developer" };
console.log(age);
// ------
// array destructuring
//we can give any name inleft side of equal side
const [first, second] = [10, 25, 21];
console.log(second);

// with array of objects
const nayoks = ["sakib", "bappi", "jayed"];
const [hero, lost, flop] = nayoks;
console.log(hero, lost, flop);

// with function
function getNames() {
  return ["hatim", "batim"];
}
const [boro, soto] = getNames();
console.log(soto, boro);
