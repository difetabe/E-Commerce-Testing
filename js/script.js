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
        arrows: true,
        focusOnSelect: true,
      }
    }
  ],
  appendArrows: $('.section-5__slider-controls')
});