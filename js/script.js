// Toggle Class Active Navbar
const navbarNav = document.querySelector(".navbar-nav");

// When menu is clicked
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click area to hide sidebar
const menuIcon = document.querySelector("#menu-icon");
document.addEventListener("click", function (e) {
  if (!menuIcon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toogle dark mode
function toogleDarkMode() {
  let elementBody = document.body;
  elementBody.classList.toggle("dark-mode");
}
