/*=========================================================
PONDOK PESANTREN ALMUSLIM
script.js
=========================================================*/

/*==============================
NAVBAR SCROLL
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


/*==============================
BACK TO TOP
==============================*/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (!toTop) return;

    if (window.pageYOffset > 400) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");

    }

});


/*==============================
SMOOTH ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==============================
FADE UP ANIMATION
==============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});


document.querySelectorAll(

".program-card,.facility-card,.vision-card,.stats-card,.gallery-grid img,.about-image,.about-text,.contact-box div"

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*==============================
COUNTER
==============================*/

const counters = document.querySelectorAll(".stats-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".statistics");

    if (!section) return;

    const trigger = section.offsetTop - 500;

    if (window.scrollY > trigger && !started) {

        started = true;

        counters.forEach(counter => {

            let value = counter.innerText.replace("+", "");

            let target = parseInt(value);

            let current = 0;

            let speed = target / 80;

            let interval = setInterval(() => {

                current += speed;

                if (current >= target) {

                    current = target;

                    clearInterval(interval);

                }

                counter.innerText = Math.floor(current) + (value.includes("+") ? "+" : "");

            }, 20);

        });

    }

});


/*==============================
GALLERY ZOOM
==============================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "lightbox";

        overlay.innerHTML = `

            <span class="close">&times;</span>

            <img src="${img.src}">

        `;

        document.body.appendChild(overlay);

        overlay.onclick = () => {

            overlay.remove();

        }

    });

});

/*=====================================
HAMBURGER MENU
=====================================*/

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.querySelector("i").classList.toggle("fa-bars");

    menuToggle.querySelector("i").classList.toggle("fa-xmark");

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.querySelector("i").classList.add("fa-bars");

        menuToggle.querySelector("i").classList.remove("fa-xmark");

    });

});

const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    navMenu.classList.remove("active");

    overlay.classList.remove("active");

    menuToggle.querySelector("i").classList.add("fa-bars");

    menuToggle.querySelector("i").classList.remove("fa-xmark");

});