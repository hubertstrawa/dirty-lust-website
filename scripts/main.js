let links = document.querySelectorAll('.menu > div > div > ul > li > a');
let arr = Array.from(links);
arr.forEach(i => {
    i.addEventListener('click', () => {
        document.querySelector('.toggler').checked = false;
    });
})

const btn = document.querySelector('.button_more_btn');
const morePhotos = document.getElementById('seeMorePhotos');

btn.addEventListener('click', function() {
    morePhotos.style.display = 'inline-flex';
    btn.style.display = 'none';
})