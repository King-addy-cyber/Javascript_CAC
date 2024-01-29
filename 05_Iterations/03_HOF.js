// for of

// const array = [1, 2, 3, 4, 5]

// for (const num of array) {
// console.log(num)
// }

// const greetings = "Hello, world!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

const map = new Map();
map.set("In", "India");
map.set("UK", "Uttra khand");
map.set("US", "United States Of America");

// console.log(map)

// for (const key of map) {
//     console.log(key)
// }
for (const [key, value] of map) {
  console.log(key, value);
}

