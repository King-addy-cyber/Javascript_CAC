// Immediately Invoked Function Expressions | IIFE
//([Function definition])(Function Invoked )
(function coffee() {
  console.log("DB Connected");
})();

//Used to avoid collisions with global variables

(() => {
  console.log("DB Connected one");
})();
(() => {
  console.log("DB Connected one");
})();
