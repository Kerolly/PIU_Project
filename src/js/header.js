// Selectează toate linkurile din meniu
const menuLinks = document.querySelectorAll('.off-screen-menu ul li a');

// Obține URL-ul curent al paginii
const currentPage = window.location.pathname.split('/').pop();

// Parcurge fiecare link și verifică dacă href-ul corespunde paginii curente
menuLinks.forEach(link => {
    if (link.getAttribute('href').split('/').pop() === currentPage) {
        link.classList.add('active');
    } else{
        link.classList.remove('active');
    }
});
