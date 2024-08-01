const array = [
  { name: "kumar", age: "24" },
  { name: "saran", age: "25" },
  { name: "saran", age: "25", gender: "male" },
  { name: "Dhinesh", age: "23" },
];
const findObject = { name: "saran", age: "25" }
const findArray = array.filter(item => { return Object.keys(findObject)?.every(key => item[key] === findObject[key])});

console.log(Object.entries(findObject));