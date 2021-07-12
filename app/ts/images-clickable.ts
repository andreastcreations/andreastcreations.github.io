const clickableImages = document.querySelectorAll('.clickable-img') as NodeListOf<HTMLImageElement>;
const modalOverlay = document.querySelector('.modal__overlay') as HTMLDivElement;
const modalImg = document.querySelector('.modal__img') as HTMLDivElement;

// Enlarge image on click.
const enlargeImage = (event: MouseEvent) => {
    while (modalImg.firstChild) {
        modalImg.removeChild(modalImg.firstChild);
    }

    // Clone image.
    var cloneImage = document.createElement('img');
    cloneImage.src = (event.target as HTMLImageElement).src;
    // Prevent dragging to a new tab/saving the image.
    cloneImage.ondragstart = () => {
        return false;
    }
    cloneImage.oncontextmenu = () => {
        return false;
    }

    modalImg.appendChild(cloneImage);
    modalOverlay.classList.add('modal__visible');
}

clickableImages.forEach(element => element.addEventListener('click', enlargeImage));

// Close enlarged image.
const closeEnlargedImage = () => {
    modalOverlay.classList.remove('modal__visible');
    
    while (modalImg.firstChild) {
        modalImg.removeChild(modalImg.firstChild);
    }
}

modalOverlay.addEventListener('click', closeEnlargedImage);