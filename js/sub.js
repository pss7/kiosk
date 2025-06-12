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






  $(".chuncheonBox02 .slickWrap .slick").slick({
    autoplay: false,
    arrows: true,
    prevArrow: ('.img_slide_box .control .prev'),
    nextArrow: ('.img_slide_box .control .next'),
    variableWidth: true,
    accessibility: false,
    dots: false,
    draggable: true,
    infinite: false,
    slidesToScroll: 1,
    zIndex: 100,
    pauseOnHover: false,
    speed: 1500,
  });
  $('.chuncheonBox02 .slickWrap .slick-current').addClass('active');
  $('.chuncheonBox02 .slickWrap').on('afterChange', function (init, event, slick, currentSlide, nextSlide) {
    $('.chuncheonBox02 .slickWrap .slide').removeClass('active');
    $('.chuncheonBox02 .slickWrap .slick-current').addClass('active');
  });









  // $('.slideMain').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   variableWidth: true,
  //   asNavFor: '.sliderNav'
  // });
  // $('.sliderNav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   asNavFor: '.slideMain',
  //   dots: false,
  //   focusOnSelect: true
  // });


  $('.chuncheonBox03 .slideMain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ('.chuncheonBox03 .control .prev'),
    nextArrow: ('.chuncheonBox03 .control .next'),
    asNavFor: '.chuncheonBox03 .sliderNav'
  });
  $('.chuncheonBox03 .sliderNav').slick({
    variableWidth: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.chuncheonBox03 .slideMain',

    focusOnSelect: true
  });












});
