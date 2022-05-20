let burger = document.querySelector(".burger");
let close = document.querySelector(".close");
let nav = document.querySelector("header nav");
let dropdownOne = document.querySelector("header nav .navbar > li:first-child");
let dropdownTwo = document.querySelector(
  "header nav .navbar > li:nth-child(2)"
);
let overlay = document.querySelector(".overlay");
burger.onclick = () => {
  nav.classList.add("open");
  nav.parentElement.style.zIndex = 10;
  overlay.style.display = "block";
};
close.onclick = () => {
  nav.classList.remove("open");
  setTimeout(() => {
    nav.parentElement.style.zIndex = -10;
  }, 300);
  overlay.style.display = "none";
};

dropdownOne.onclick = expand;
dropdownTwo.onclick = expand;

function expand() {
  this.querySelector("svg").classList.toggle("rotate");
  this.lastElementChild.classList.toggle("expand");
}
