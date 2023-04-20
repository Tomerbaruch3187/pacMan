const img = document.querySelector('img');
const badGuy = document.getElementById('badman');


function moveRight() {
    let moveRightCss = img.style.left;
    moveRightCss = parseInt(moveRightCss) - 10;

    if (moveRightCss == 0) {
        return;
    };

    moveRightCss = moveRightCss + 'px';
    img.style.left = moveRightCss;

};

function moveLeft() {
    let moveLeftCss = img.style.left;
    moveLeftCss = parseInt(moveLeftCss) + 10;

    if (moveLeftCss >= document.body.clientWidth) {
        return;
    };

    moveLeftCss = moveLeftCss + 'px';
    img.style.left = moveLeftCss;

};

function moveDown() {
    let moveDownCss = img.style.top;
    moveDownCss = parseInt(moveDownCss) + 10;

    if (moveDownCss >= document.body.clientHeight) {
        return;
    };

    moveDownCss = moveDownCss + 'px';
    img.style.top = moveDownCss;
};

function moveUp() {
    let moveUpCss = img.style.top;
    moveUpCss = parseInt(moveUpCss) - 10;

    if (moveUpCss == 0) {
        return;
    };

    moveUpCss = moveUpCss + 'px';
    img.style.top = moveUpCss;
};

// boradKeys to move the pacman
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65) {
        img.classList = ('move-right-img');
        moveRight();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 68) {
        img.classList = ('move-left-img');
        moveLeft();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 83) {
        img.classList = ('move-down-img');
        moveDown();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 87) {
        img.classList = ('move-up-img');
        moveUp();
    }
});


// Moving the badGuy
for (let i = 0; i < Infinity; i++) {
    let info = badGuy.style.top;
    badGuy.style.transition = '6s';
    info = parseInt(info) + 10;

    if (info >= document.body.clientHeight) {
        break;
    }

    info = info + "px";
    badGuy.style.top = info;
}