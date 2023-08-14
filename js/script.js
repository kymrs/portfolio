// Toggle class active
const navbarNav = document.querySelector("nav");
const content = document.querySelector(".content");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  content.classList.toggle("active1");
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    content.classList.remove("active1");
  }
});
