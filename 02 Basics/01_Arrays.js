const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const Days = ["Sun", "Mon", "Tue", "Wed"];

const newArr = new Array(1, 2, 3, 4, 5);

//Array Methods

// newArr.push(10);
// console.log(newArr);
// newArr.pop();
// console.log(newArr);
// newArr.unshift(11);
// console.log(newArr);
// newArr.shift();
// console.log(newArr);

// console.log(newArr.includes(4));
// console.log(newArr.indexOf(4));
// const newArr1 = newArr.join()
// console.log(newArr1);

//slice , splice

console.log("A", newArr);

const arr2 = newArr.slice(1, 4);
console.log(arr2);

const arr3 = newArr.splice(1, 3);
console.log(arr3);
