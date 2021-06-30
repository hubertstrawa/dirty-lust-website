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


$(document).ready(function(){
  $('.accordion_item > h3').on('click',function(){
      $('.accordion_item > .box-accordion').each(function(k,v){
        $(v).css('display','none');
        $(v).prev().children().removeClass('turned');
      })
      $(this).next().fadeToggle()
      $(this).children().addClass('turned')
  })
  $('.regulamin-btn-expand').on('click', function(){
    $(this).css({opacity: '0', visibility: 'hidden'})
    $('.regulamin-btn-less').css({opacity: '1', visibility: 'unset'})
    $('.regulamin-text-expanded').fadeIn()
  })
  $('.regulamin-btn-less').on('click', function(){
    $(this).css({opacity: '0', visibility: 'hidden'})
    $('.regulamin-btn-expand').css({opacity: '1', visibility: 'unset'})
    $('.regulamin-text-expanded').fadeOut()
  })
})



