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
})
