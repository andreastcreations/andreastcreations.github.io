"use strict";
const pageBody = document.querySelector('body');
// Fade out transition to page.
function transitionToPage(href) {
    pageBody.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 500);
}
// Fade in when page loads.
const fadeIn = () => {
    pageBody.style.opacity = '1';
};
document.addEventListener('DOMContentLoaded', fadeIn);
