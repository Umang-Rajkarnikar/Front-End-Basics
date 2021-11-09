const images = document.querySelectorAll('.card-img-top');
const buttons = document.querySelectorAll('.btn-buy');
const headers = document.querySelectorAll('.header h1');

function mouseOver(i){
    buttons[i].style.outline = '2px solid black';
    // headers[i].style.visibility = 'visible';
    // headers[i].style.height = '57px';
}

function mouseOut(i) {
    buttons[i].style.outline = '0px';
    // headers[i].style.visibility = 'hidden';
}