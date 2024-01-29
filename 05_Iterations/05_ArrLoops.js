// const coding = ["ruby", "python", "cpp", "javascript", "java"];

// coding.forEach((item) => {
//     // console.log(item)
// })

// function print(item) {
//     console.log(item)
// }

// coding.forEach(print)

// coding.forEach((item , index , arr) => {
//   console.log(item , index , arr)
// });

const myCoding = [
  {
    langName: "ruby",
    code: "rb",
  },
  {
    langName: "CPP",
    code: "C++",
  },
  {
    langName: "Swift",
    code: "SW",
  },
  {
    langName: "Java",
    code: "Java",
  },
  {
    langName: "Python",
    code: "Py",
  },
  {
    langName: "C",
    code: "C",
  },
];

myCoding.forEach(element => {
     console.log(element.code);
});