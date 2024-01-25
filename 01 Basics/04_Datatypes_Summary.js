//How data is accessed and stored in the memory makes different categories as primitive types and non-primitive types

//Primitive datatypes:
// There are 7 Primitive datatypes in js : String, Boolean, Number, BigInt, Null, Undefined, and Symbol they are basic to create non primitive dayatypes.
//primitive types of datatypes are call by value such that when we the changes are made to copyes not to the actual memory location.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail = undefined;
const id = Symbol("12345");
const id1 = Symbol("12345");

// console.log(id === id1);
const BigNum = 5144146464614561461n;
// console.log(BigNum);

// Non-Primotive (reference)
//Direct reference is allocated for the change
//Arrays , Objects , functions

const heros = ["A", "B", "C", "D"];
const obj = {
  name: "Adarsh",
  RollNo: 7,
};

const func = function () {
  console.log("Hello world");
};

console.log(typeof id1);
