$(function () {

  $(window).on('load', function () {
    $(".orgInfoBox").addClass("effect");
  });

  $(".chuncheonViewBox .slickBox .slick").slick({
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
    prevArrow: $('.chuncheonViewBox .prev'),
    nextArrow: $('.chuncheonViewBox .next'),
  });

});
