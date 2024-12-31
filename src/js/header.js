//---MOBILE---

// All links from menu
const menuLinks = document.querySelectorAll('.off-screen-menu ul li a');

// Current url
const currentPage = window.location.pathname.split('/').pop();

menuLinks.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
        link.classList.add('active');
    } else{
        link.classList.remove('active');
    }
});

// Animation for mobile meniu

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const horizontalLine = document.querySelector('header hr');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    horizontalLine.classList.toggle('active');
});

// Scroll header
const header = document.querySelector("header");
const headerTexts = document.querySelectorAll(".logo h2, .logo p");
const hamMenuColor = document.querySelectorAll(".ham-menu span");
const hr = document.querySelector("header hr");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    hr.classList.add("scrolled-hr");

    headerTexts.forEach((element) => {
      element.classList.add("scrolled-text");
    });

    hamMenuColor.forEach((element) => {
      element.classList.add("scrolled-ham");
    });
  } else {
    header.classList.remove("scrolled");
    hr.classList.remove("scrolled-hr");

    headerTexts.forEach((element) => {
      element.classList.remove("scrolled-text");
    });

    hamMenuColor.forEach((element) => {
      element.classList.remove("scrolled-ham");
    });
  }
});


//---DESKTOP---

const desktopMenuLinks = document.querySelectorAll('.desktop-nav-items a');

desktopMenuLinks.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
        link.classList.add('active');
    } else{
        link.classList.remove('active');
    }
})