const button = document.querySelector("button");
const thing = document.querySelector(".thing");
const high = document.querySelector(".high");
const higher = document.querySelector(".higher");
const highest = document.querySelector(".highest");

button.addEventListener("click", function (e) {
  console.log("Button clicked!");
});

thing.addEventListener("click", function (e) {
  console.log("thing clicked");
  colorChange(e.currentTarget);
});

high.addEventListener("click", function (e) {
  console.log("high clicked");
  setTimeout(colorChange(e.currentTarget), 5200);
});

higher.addEventListener("click", function (e) {
  console.log("Higher clicked!");
  colorChange(e.currentTarget);
});

highest.addEventListener("click", function (e) {
  console.log("Highest clicked!");
  setTimeout(colorChange(e.currentTarget), 2200);
});

function colorChange(element) {
  element.style.backgroundColor = "blue";
}
