// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Open / Close Menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

// Close menu after clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});