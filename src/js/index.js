const header = document.querySelector('header');
const headerTexts = document.querySelectorAll('.logo h2, .logo p');
const hamMenuColor = document.querySelectorAll('.ham-menu span');
const hr = document.querySelector('header hr');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled');
        hr.classList.add('scrolled-hr');

        headerTexts.forEach(element => {
            element.classList.add('scrolled-text');
        });

        hamMenuColor.forEach(element => {
            element.classList.add('scrolled-ham');
        });

    }else{
        header.classList.remove('scrolled');
        hr.classList.remove('scrolled-hr');
        
        headerTexts.forEach(element => {
            element.classList.remove('scrolled-text');
        })

        hamMenuColor.forEach(element => {
            element.classList.remove('scrolled-ham');
        })
    }
})