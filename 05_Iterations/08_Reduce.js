const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (acc, curval) {
//   console.log(`accumulating ${acc} and currentvalue ${curval}`);
//   return acc + curval;
// }, 10);

const myTotal1 = myNums.reduce((acc, curval) => {
  console.log(`accumulating ${acc} and currentvalue ${curval}`);
  return acc + curval;
}, 10);

console.log(myTotal1);

const shopingCart = [
  {
    itemName: "Js Course",
    price: 2900,
  },
  {
    itemName: "FSD",
    price: 3000,
  },
  {
    itemName: "Mobile Dev Course",
    price: 29000,
  },
  {
    itemName: "Python Course",
    price: 8000,
  },
];

const total = shopingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total);
