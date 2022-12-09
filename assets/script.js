document.addEventListener("DOMContentLoaded", () => {
  
  const navBurger = document.getElementById("navBurger");
  const navMenu = document.getElementById("navMenu");
  
  navBurger.addEventListener("click", () => {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  });  
});
