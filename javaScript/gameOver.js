const gameOver = function () {
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
};