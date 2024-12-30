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

// --Carousel Scroll--

const carousel = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("active");

  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.style.cursor = "grabbing";
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("active");
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.classList.remove("active");
  carousel.style.cursor = "grab";
});
carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Ajustează factorul de multiplicare pentru viteza derulării
  carousel.scrollLeft = scrollLeft - walk;
});
