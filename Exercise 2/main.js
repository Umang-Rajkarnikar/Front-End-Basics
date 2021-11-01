const myContent = document.querySelector('.content');
myContent.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.container').style.height = '300pt';
});