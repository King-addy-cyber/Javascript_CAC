function myName() {
  console.log("A");
  console.log("D");
  console.log("A");
  console.log("R");
  console.log("S");
  console.log("H");
}

// myName()

// function add(n1, n2) {
//   console.log(n1 + n2);
// }

// function add(n1, n2) {
//   return n1 + n2;
// }

// const res = add(3, 5);

// console.log(res);

// function loginUserMsg(username = "username") {
//   return console.log(`Welcome ${username} to microsoft.org`);
// }

// // console.log(loginUserMsg("Adarsh Sharma"))
// console.log(loginUserMsg());

// function calculateCartPrice(...amount) {
//   return amount;
// }

// console.log(calculateCartPrice(200, 300, 400, 500, 600));

function calculateCartPrice2(am1, am2, ...amount) {
  return amount;
}
console.log(calculateCartPrice2(200, 300, 400, 500, 600));

const user = {
  username: "Adarsh Sharma",
  age: 25,
};

function handelObject(anyObject) {
  console.log(`UserName is ${anyObject.username} and age is ${anyObject.age}`);
}

handelObject(user);

const newArr = [100, 200, 300, 500];

function func(getArr) {
  return getArr[1];
}

console.log(func(newArr));
console.log(func(newArr));
