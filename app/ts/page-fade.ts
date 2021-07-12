const pageBody = document.querySelector('body') as HTMLElement;

// Fade out transition to page.
function transitionToPage(href: string) {
    pageBody.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 500);
}

// Fade in when page loads.
const fadeIn = () => {
    pageBody.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', fadeIn);