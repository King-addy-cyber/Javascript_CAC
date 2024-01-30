const form = document.querySelector("form");
//This use case will give an empty value
const height = parseInt(document.querySelector("#height").value);
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < 18.6) {
      results.innerHTML = `<span>Your BMI is ${BMI} which means you are under weight and need to put some waight on </span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      results.innerHTML = `<span>Your BMI is ${BMI} which is normal keep up the good work !! </span>`;
    } else if (BMI > 24.9) {
      results.innerHTML = `<span>Your BMI is ${BMI} which means you are over weight and need to put some waight of by pulling some weight !! </span>`;
    }
  }
  const guide = document.querySelector("#guide");
});
