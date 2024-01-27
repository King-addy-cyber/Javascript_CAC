//Singleton
Object.create; //constructure > Singleton

//Object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Adarsh",
  "full name": "Adarsh Sharma",
  [mySym]: "mykey1",
  age: 25,
  location: "Delhi",
  email: "adarsh@gmail.com",
  isLoggedIn: false,
  lastLogin: ["Monday", "Friday", "Saturday"],
};

// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "adarsh@fb.com";

// Object.freeze(jsUser);
jsUser.email = "adarsh@fbb.comm";

// console.log(jsUser.email);

jsUser.greetings = function () {
  console.log("Hii Hello");
};
jsUser.greetings2 = function () {
  console.log(`Hii Hello ${this.name}`);
};

console.log(jsUser.greetings);
console.log(jsUser.greetings());
console.log(jsUser.greetings2());
