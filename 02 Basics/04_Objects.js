// // const kinder = new Object(); //singleton object

const kinderUser = {}; //non-singleton object

kinderUser.id = "123acb";
kinderUser.name = "Tim";
kinderUser.isLoggedin = false;
// // console.log(kinderUser);

const regUser = {
  email: "123acb@gmail.com",
  fullName: {
    userFullname: {
      first: "Adarsh",
      last: "Sharma",
    },
  },
};

// // console.log(regUser.fullName?.userFullname.first)

// const obj1 = {
//   1: "a",
//   2: "b",
// };
// const obj2 = {
//   3: "c",
//   4: "d",
// };

// // const obj3 = { obj1, obj2 };
// // const obj4 = Object.assign({}, obj1, obj2);
// // console.log(obj4);

// const obj5 = { ...obj1, ...obj2 };
// // console.log(obj5);

// const user = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Tim" },
//   { id: 3, name: "Xim" },
//   { id: 4, name: "Chimm" },
// ];

// // console.log(user[3].id);

// console.log(kinderUser);
// console.log(Object.keys(kinderUser));
// console.log(Object.values(kinderUser));
// console.log(Object.entries(kinderUser));
// console.log(kinderUser.hasOwnProperty("name"));

// console.log(1+"1"-1)

const course = {
  coursename: "Python",
  price: "9999",
  Instructor: "Adarsh Sharma",
};

//Object Destructuring
const { Instructor: inst } = course;

console.log(inst);

const navbar = ({ company }) => {};

navbar((company = "ABC"));

//JSON Object
// {
//   "name": "Adarsh Sharma"
//    "price": "9999",
//   "Instructor": "Adarsh Sharma",
// }
