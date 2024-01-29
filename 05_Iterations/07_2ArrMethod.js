const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const newNumss = myNum.map((item) => item + 10);

// console.log(newNumss)

//Chaining

const chained = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const num1 = chained
  .map((item) => item * 10)
  .map((num) => num + 1)
  .filter((num2) => num2 > 40);

console.log(num1);
