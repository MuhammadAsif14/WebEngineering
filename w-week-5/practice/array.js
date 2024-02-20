const cs=["Asif","Aayesha","Nizam"];
let cs1=cs[1];
cs.push("Danish");
console.log(cs);
cs.pop();
console.log(cs);
const sorted=cs.sort()
console.log(cs.length);


const fruit=["apple","Banana","grape"];
const veg=["lemon","potato","tomato"];

const vegfru=fruit.concat(veg);
const half=vegfru.slice(1,4);
console.log(half);

console.log(half.lastIndexOf("grape"));

console.log(half.includes("grape"));
