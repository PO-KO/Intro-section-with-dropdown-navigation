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

dropdownOne.onclick = showDrop;
dropdownTwo.onclick = showDrop;

if (window.innerWidth < 920) {
  dropdownOne.lastElementChild.style.display = "block";
  console.log(dropdownOne.lastElementChild.style.display);
  console.log(dropdownOne.lastElementChild);
  dropdownTwo.lastElementChild.style.display = "block";
  nav.parentElement.style.zIndex = -10;
} else {
  dropdownOne.lastElementChild.style.display = "none";
  dropdownTwo.lastElementChild.style.display = "none";
  overlay.style.display = "none";
  nav.classList.remove("open");
  nav.parentElement.style.zIndex = 10;
}

window.onresize = function () {
  if (this.innerWidth < 920) {
    dropdownOne.lastElementChild.style.display = "block";
    dropdownTwo.lastElementChild.style.display = "block";
    nav.parentElement.style.zIndex = -10;
  } else {
    dropdownOne.lastElementChild.style.display = "none";
    dropdownTwo.lastElementChild.style.display = "none";
    overlay.style.display = "none";
    nav.classList.remove("open");
    nav.parentElement.style.zIndex = 10;
  }
};
function showDrop() {
  if (window.innerWidth < 920) {
    // this.lastElementChild.style.display = "block";
    this.lastElementChild.classList.remove("hover");
    this.querySelector("svg").classList.toggle("rotate");
    this.lastElementChild.classList.toggle("expand");
  } else {
    if (this.lastElementChild.classList.contains("hover")) {
      this.lastElementChild.classList.remove("hover");
      setTimeout(() => {
        this.lastElementChild.style.display = "none";
      }, 300);
    } else {
      this.lastElementChild.style.display = "block";
      setTimeout(() => {
        this.lastElementChild.classList.add("hover");
      }, 100);
    }
  }
}

window.addEventListener("click", function (event) {
  if (
    event.target.parentElement.lastElementChild !==
      dropdownOne.lastElementChild &&
    event.target.parentElement.lastElementChild !==
      dropdownTwo.lastElementChild &&
    window.innerWidth >= 920
  ) {
    dropdownOne.lastElementChild.style.display = "none";
    dropdownOne.lastElementChild.classList.remove("hover");
    dropdownTwo.lastElementChild.style.display = "none";
    dropdownTwo.lastElementChild.classList.remove("hover");
  }
});

// When the user clicks anywhere outside of the modal, close it
