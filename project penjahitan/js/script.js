// Toggle class "active" pada elemen
const navbarNav = document.querySelector('.navbar-nav');

// Ketika menu hamburger diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klick diluar side bar untuk menghilang

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});