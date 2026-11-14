const menuToggle = document.querySelector(".menu-toggle");
const navWrap = document.querySelector(".nav-wrap");
const navLinks = document.querySelectorAll(".nav a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navWrap.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navWrap.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
