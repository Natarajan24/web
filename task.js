const array = [
    { name: "kumar", age: "24" },
    { name: "saran", age: "25" },
    { name: "Dhinesh", age: "23" },
    { name: "Arun", age: "26" }
  ];
  
  const findArray = array.filter(item => JSON.stringify(item) === JSON.stringify({ name: "Arun", age: "26" }));
  
  console.log(findArray);