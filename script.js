let burger = document.querySelector("burger");
let close = document.querySelector("close");
let dropdownOne = document.querySelector("header nav .navbar > li:first-child");
let dropdownTwo = document.querySelector(
  "header nav .navbar > li:nth-child(2)"
);

console.log(dropdownTwo);

dropdownOne.onclick = expand;
dropdownTwo.onclick = expand;

function expand() {
  this.querySelector("a").classList.toggle("rotate");
  this.lastElementChild.classList.toggle("expand");
}
