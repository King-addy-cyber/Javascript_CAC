let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

// let mydate = new Date(2024, 0, 25);
let myCreatedDate = new Date("2024-01-25");
let mydate = new Date("01-25-2024");
// console.log(mydate.toDateString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now() / 1000));

let newdate = new Date();
// console.log(newdate);
// console.log(newdate.getMonth());
// console.log(newdate.getDay());
// console.log(newdate.getHours());
// console.log(newdate.getMinutes());

console.log(
  newdate.toLocaleString("default", {
    // weekday: "long",
    // weekday: "short",
    weekday: "narrow",
  })
);
