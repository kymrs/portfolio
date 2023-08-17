// Toggle class active
const navbarNav = document.querySelector("nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Dark  Mode

if(localStorage.getItem('theme') == 'dark')
  setDarkMode(true)

function setDarkMode(isDark) {
  if(isDark) {
    document.body.setAttribute('id', 'darkmode')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.setAttribute('id', '')
    localStorage.removeItem('theme')
  }
}

