$(".section-5__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 539,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
      
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: true,
        nextArrow: true
      }
    }
    
  ],
  appendArrows: $('.section-5__slider-controls')
});