document.addEventListener('keydown', function () {
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

    // check for collision
    if (badGuy.offsetTop === img.offsetTop && badGuy.offsetLeft === img.offsetLeft) {

        //Game Over text.
        const gameOver = document.querySelector('.game-over');
        gameOver.style.display = 'block';

        // 'none' How To Play Keys
        const allKeyDowns = document.querySelector('.all-keydowns');
        allKeyDowns.style.display = 'none';

        //Blur div to 'block'
        const blurDiv = document.getElementById('blur-div');
        blurDiv.style.display = 'block';
    }
});