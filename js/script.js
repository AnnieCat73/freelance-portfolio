//NAVIGATION FOR TABLET AND MOBILE

const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");

//Attach eventlisteners and toggle navigation-open class
openBtn.addEventListener("click", () => {
  navMenu.classList.toggle("navigation-open");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.toggle("navigation-open");
});

//Navigate to sections from the mobile menu/

const aboutLink = document.querySelector("#js-about");
const servicesLink = document.querySelector("#js-services");
const workLink = document.querySelector("#js-work");
const contactLink = document.querySelector("#js-contact");

//Get to about section 
aboutLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

//Get to services section
servicesLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

//Get to work/portfolio section
workLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

//Get to contact section
contactLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});



