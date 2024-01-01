const menuX = document.querySelector("#moblie-menu");
const ulMenu = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#logo");
// display mobile menu
function MobileMenu() {
  menuX.classList.toggle("isActive");
  ulMenu.classList.toggle("active");
}
menuX.addEventListener("click", MobileMenu);
// show active menu when  scrolling
const hightLightMenu = () => {
  const elemnt = document.querySelector(".hightlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scroolPos = window.scrollY;
  // ads 'higthLight' class to my menu items;
  if (window.innerWidth > 960 && scroolPos < 600) {
    homeMenu.classList.add("hightlight");
    aboutMenu.classList.remove("hightlight");
    return;
  } else if (window.innerWidth > 960 && scroolPos < 1400) {
    aboutMenu.classList.add("hightlight");
    homeMenu.classList.remove("hightlight");
    servicesMenu.classList.remove("hightlight");
    return;
  } else if (window.innerWidth > 960 && scroolPos < 2345) {
    aboutMenu.classList.remove("hightlight");
    servicesMenu.classList.add("hightlight");
    return;
  }
  if ((elemnt && window.innerWidth < 960 && scroolPos < 600) || elemnt) {
    elemnt.classList.remove("hightlight");
    return;
  }
};
window.addEventListener("scroll", hightLightMenu);
window.addEventListener("click", hightLightMenu);
//! should add return with if to omit problems
//close mobile menu
closeMobileMenu = () => {
  const menuBars = document.querySelector(".isActive");
  if (window.innerWidth <= 960 && menuBars) {
    menuX.classList.toggle("isActive");
    ulMenu.classList.remove("active");
  }
};
ulMenu.addEventListener("click", closeMobileMenu);
navLogo.addEventListener("click", closeMobileMenu);
