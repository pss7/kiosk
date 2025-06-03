
$(function () {

  $(window).load(function () {
    setInterval(function () {
      const $el = $('.animation');
      $el.removeClass('effect');
      void $el[0].offsetWidth;
      $el.addClass('effect');
    }, 12000);
  });

  $(".slickWrap .slick").slick({
    variableWidth: false,
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 8000,
    speed: 1500,
    prevArrow: $('#section01 .prev'),
    nextArrow: $('#section01 .next'),
  });



});
