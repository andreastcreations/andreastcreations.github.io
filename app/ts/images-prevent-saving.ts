const imagesArray = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;

// Prevent image context menu and dragging to another tab.
imagesArray.forEach(element => {
    element.ondragstart = () => {
        return false;
    }
    element.oncontextmenu = () => {
        return false;
    }
});