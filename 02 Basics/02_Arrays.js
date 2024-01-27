const birds = ["Sparrow", "Peacock", "Pegion"];
const animals = ["Tiger", "Bear", "Giraffe"];

// birds.push(animals);
// console.log(birds);

// const jungle = birds.concat(animals);
// console.log(jungle);

// const jungle1 = [...birds, ...animals];
// console.log(jungle1);

// const arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [8, 5]]];

// const arr2 = arr1.flat(Infinity);
// console.log(arr2)

console.log(Array.isArray(birds));
console.log(Array.from("Adarsh"))
console.log(Array.from({ name: "Aman Sharma" }))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))