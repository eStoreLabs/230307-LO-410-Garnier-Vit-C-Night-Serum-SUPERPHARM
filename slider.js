
$(document).ready(function(){
    $('.swiper-wrapper').slick({
          dots: true,
          infinite: true,
          cssEase: 'linear',
          prevArrow: '.slick-button-prev',
       nextArrow: '.slick-button-next',
    });
    $('.swiper-slide').slick();
  });