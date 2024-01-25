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

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

//    JavaScript is a dynamically typed language.

// ------------------------Memory In Js--------------

// Stack (Primitive) we get copy of declared variable , Heap (Non - Primitive) we get actual value refernce.

let myName = "Adarsh Sharma";

let name = "Aman Sharma";
name = "Adarsh Sharma";
console.log(name);

let user = {
  email: "ad@gmail.com",
  upi: "user@ybl",
};
let user1 = user;

user1.email = "kekou@gmail";

console.log(user);
console.log(user1);
