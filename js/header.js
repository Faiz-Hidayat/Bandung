const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  header.classList.toggle('header--sticky', window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header__navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('header__navbar--open');
};
