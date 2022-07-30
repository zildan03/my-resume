//ini untuk bagian hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//click ham di luar
window.addEventListener('click', function(e) {
if (e.target !=hamburger && e.target != navmenu){
    hamburger.classList.remove ('hamburger-active');
    navmenu.classList.add ('hidden');
}
})