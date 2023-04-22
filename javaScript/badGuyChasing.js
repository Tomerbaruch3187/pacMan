document.addEventListener('keydown', function () {
    keysDivRemoving(); //w-a-s-d opacity -> 0

    for (let i = 0; i < Infinity; i++) {
        let infoTop = badGuy.style.top;

        if (badGuy.style.top == img.style.top) {
            break;
        }
        infoTop = infoTop + "px";
        badGuy.style.top = img.style.top;
    }


    for (let i = 0; i < Infinity; i++) {
        let infoButtom = badGuy.style.left;

        if (badGuy.style.left == img.style.left) {
            break;
        }
        infoButtom = infoButtom + "px";
        badGuy.style.left = img.style.left;
    }

    setInterval(gameOver, 1);
});