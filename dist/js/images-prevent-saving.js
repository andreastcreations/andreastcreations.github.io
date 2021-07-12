"use strict";
const imagesArray = document.querySelectorAll('img');
// Prevent image context menu and dragging to another tab.
imagesArray.forEach(element => {
    element.ondragstart = () => {
        return false;
    };
    element.oncontextmenu = () => {
        return false;
    };
});
