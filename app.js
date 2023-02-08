const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const headerDesc = document.querySelector(".header__desc");
const headerImg = document.querySelector(".header__img");
const heroContainer = document.querySelector(".hero__container");
const heroInput = document.querySelector(".hero__input");

let bg = true;
moon.addEventListener("click", () => {
  if (bg) {
    body.style.background = "#141D2F";
    headerDesc.textContent = "LIGHT";
    headerImg.src = "./images/Site-logo1.svg";
    moon.src = "./images/sun.svg";
    headerDesc.style.color = "#fff";
    heroContainer.style.background = "#1E2A47";
    heroInput.style.background = "#1E2A47";
  } else {
    body.style.background = " #F2F2F2";
    headerDesc.textContent = "DARK";
    headerDesc.style.color = "#4B6A9B";
    moon.src = "./images/header-icon.svg";
    headerImg.src = "./images/Site-logo.svg";

    heroContainer.style.background = "#FEFEFE";
    heroInput.style.background = "#FEFEFE";
  }
  bg = !bg;
});
