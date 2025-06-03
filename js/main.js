
$(function () {

  $(window).on('load', function () {
    setInterval(function () {
      $('.animation').each(function () {
        const $el = $(this);
        $el.removeClass('effect');
        void this.offsetWidth;
        $el.addClass('effect');
      });
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
