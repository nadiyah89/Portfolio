const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Mobile Menu Toggle
menu.onclick = () => {
    nav.classList.toggle("active");
};

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove("active");
    });
});

// Scroll Spy - Update Active Nav Link
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Update Copyright Year dynamically
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}