"use strict";

const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");
if (burger && menu) {
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") !== "true";
    burger.setAttribute("aria-expanded", String(expanded));
    burger.classList.toggle("is-active", expanded);
    menu.classList.toggle("is-active", expanded);
  });
}
