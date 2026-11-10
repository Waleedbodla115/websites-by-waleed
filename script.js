
// ===================================
// MOBILE NAVIGATION MENU
// ===================================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu when a navigation link is clicked

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// ===================================
// DARK MODE TOGGLE
// ===================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );

});


// ===================================
// WHATSAPP CONTACT FORM
// ===================================

const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[name="name"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[name="email"]'
    ).value.trim();

    const message = contactForm.querySelector(
        'textarea[name="message"]'
    ).value.trim();

    const phoneNumber = "923055181115";

    const whatsappMessage =
        "Hello Websites By Waleed!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Project Details:\n" + message;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

});
