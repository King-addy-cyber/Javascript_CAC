const user = {
  username: "Adarsh",
  price: 1000,

  welcomeMessage: function () {
    console.log(`Welcome ${this.username}`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sharma";
// user.welcomeMessage();

// console.log(this);

// function coffee() {
//   let username = "Adarsh";
//   console.log(this.username);
// }

// coffee();

// const coffee = function () {
//   let username = "Adarsh";
//   console.log(this.username);
// };
// coffee();
// const coffee = () => {
//   let username = "Adarsh";
//   console.log(this.username);
//   console.log(this);
// };
// coffee();

//Explicit return
// let add5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add5(1, 20));

//Implicit Return
let add5 = (num1, num2) => num1 + num2;
//Returning an object with implicit return
let add6 = () => ({ name: "Adarsh", username: "Adarsh" });

console.log(add5(1, 20));
