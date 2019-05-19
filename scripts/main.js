let links = document.querySelectorAll('.menu > div > div > ul > li > a');
    let arr = Array.from(links);
    arr.forEach(i => {
        i.addEventListener('click', () => {
            document.querySelector('.toggler').checked = false;
        });
    })