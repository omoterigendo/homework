const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click', function () {
    doYesMore();
});

buttonYes.addEventListener('click', function () {
    buttonYesPushed();
});

function doYesMore () {
    buttonYesFontSize += .4;
    buttonYes.style.fontSize = buttonYesFontSize + 'em';

    buttonNoFontSize -= .2;
    buttonNo.style.fontSize = buttonNoFontSize + 'em';
}

function buttonYesPushed (){
    location.href = './page2.html';
}