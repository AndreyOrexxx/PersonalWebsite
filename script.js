const menuActive = document.querySelector(".main-menu__activ");
const headerMenu = document.querySelector(".header-header__nav_menu");

function toggleMenu() {
  menuActive.classList.toggle("hidden");
}

headerMenu.addEventListener("click", toggleMenu);
