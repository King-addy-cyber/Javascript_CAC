for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    // console.log("Printing 5")
    continue;
  }

  //   console.log(index);
}

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loop: ${i}`);
//     for (let j = 0; j < 10; j++) {
//          console.log(`Inner Loop ${j} and Outer Loop: ${i}`);

//     }
// }
// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${i * n}`);
// }

for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication Table Of ${i} `);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${j * i}`);
  }
}
