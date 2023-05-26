const hamburgerBtn = document.querySelector('.hamburger');
const navbarItems = document.querySelector('.nav-items');

hamburgerBtn.addEventListener('click', ()=> {
    navbarItems.classList.toggle('active');
});