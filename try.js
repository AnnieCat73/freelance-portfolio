//Menu on mobile

//Get elements
const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");

//Attach eventlisteners and toggle navigation-open class
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

openBtn.addEventListener("click", () => {
  navMenu.classList.add("navigation-open");
});
