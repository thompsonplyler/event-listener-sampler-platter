let button = document.getElementById("my-button");
let body = document.getElementsByTagName("body");

button.addEventListener("click", function (event) {
  body[0].style.backgroundColor = `rgba(${newRandomNumber()},${newRandomNumber()} ,${newRandomNumber()} ,1`;
});


// creates a random number between 0 and 255.
function newRandomNumber() {
  let value = Math.floor(Math.random() * 255);

  // let number = Math.random()
  // gives you a float point number between 0 and 1
  // to 16 places
  // e.g. 0.38025801717832897, 0.9858512683996941
  // 
  // Math.floor() rounds any floating point value DOWN to the nearest integer. 
  // conversely Math.ceil(), which isn't used here, rounds any floating point value 
  // UP to the nearest integer.
  //
  // More JavaScript Math. methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  return value;
}
