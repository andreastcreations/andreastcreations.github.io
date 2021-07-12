"use strict";
const menuNavBar = document.querySelector('.navbar__menu');
const mobileMenuButton = document.querySelector('#mobile-menu');
// Open mobile menu on tap.
const activateMobileMenu = () => {
    mobileMenuButton.classList.toggle('is-active');
    menuNavBar.classList.toggle('active');
};
mobileMenuButton.addEventListener('click', activateMobileMenu);
// Close mobile menu on tap outside menu area.
const closeMobileMenuOnTapOutside = (event) => {
    var isClickInsideMenu = mobileMenuButton.contains(event.target);
    if (!isClickInsideMenu) {
        mobileMenuButton.classList.remove('is-active');
        menuNavBar.classList.remove('active');
    }
};
window.addEventListener('click', closeMobileMenuOnTapOutside);
