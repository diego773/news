const navToggle = document.querySelector(".navbar-toggle");
const navList = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".close-menu");

const menuToggle = () => {
  if (navToggle) {
    navToggle.style.display = "none";
    navList.style.display = "block";
    navList.style.width = "250px";
    closeMenu.style.display = "block";
  }
};

const menuClose = () => {
  if (closeMenu) {
    navToggle.style.display = "block";
    navList.style.display = "none";
    closeMenu.style.display = "none";
  }
};

navToggle.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuClose);
