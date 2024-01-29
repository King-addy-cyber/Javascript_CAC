const userEmail = "adarsharma@gmail.com";

// if (userEmail) {
//   console.log("Got the user email");
// } else {
//   console.log("No user email found");
// }

/* Falsy Values 
false , 0 ,-0 ,bigInt 0n , "",null , undefined , Nan */

/* Truthy Vlaues
true , "0" , "false", " ",[],{},function(){} */

// Nullish Coalescing OPerator ( ??) : num undefined

// let val1;
// val1 = 5 ?? 10;
// val2 = null ?? 10;
// // console.log(val1);

// let val3 = undefined ?? 15;
// // console.log(val3);

// val4 = null ?? 10 ?? 20;
// console.log(val4);

//Terniary OPerator

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
