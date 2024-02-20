const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const person1 = {
    firstName: "John",
    lastName: "Doe",

  };
  const person2 = {
    firstName: "Rohan",
    lastName: "Mughal",
    age: 22,
    eyeColor: "Brown"
  };

  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.age);
  console.log(person.eyeColor);
  console.log(Object.keys(person));
  console.log(Object.values(person))

  console.log("entries: \n"+ Object.entries(person))
  
  console.log(Object.entries(person))

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

const p12= Object.assign(person2, person1);
console.log(p12);


const array = [1,1,1,2,3,4,2,2,3,1,4,2];

const countObject = {

};

for (let i = 0; i < array.length; i++) {
  const number = array[i];
  if(countObject[number]){
    countObject[number]++;
  }
  else {
    countObject[number] = 1;
  }
    
}

console.log(countObject);


countObjectFruit={};
const fruit = ["Apple", "Banana","Apple"];

for (let i = 0; i < fruit.length; i++) {
    const number = fruit[i];
    countObjectFruit[number] = (countObjectFruit[number] || 0)+1;
  }
  

console.log(countObjectFruit);

const arr=[{id:2},{id:4},{id:3},{id:1},{id:1},{id:3}];

const countObjectPerson = {

};

for (let i = 0; i < arr.length; i++) {
  const number = arr[i];
  if(countObjectPerson[number.id]){
    countObjectPerson[number.id]++;
  }
  else {
    countObjectPerson[number.id] = 1;
  }
   
  
}

console.log(countObjectPerson);
