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






  // $(".chuncheonBox02 .slickWrap .slick").slick({
  //   autoplay: false,
  //   arrows: true,
  //   prevArrow: ('.img_slide_box .control .prev'),
  //   nextArrow: ('.img_slide_box .control .next'),
  //   variableWidth: true,
  //   accessibility: false,
  //   dots: false,
  //   draggable: true,
  //   infinite: false,
  //   slidesToScroll: 1,
  //   zIndex: 100,
  //   pauseOnHover: false,
  //   speed: 1500,
  // });
  // $('.chuncheonBox02 .slickWrap .slick-current').addClass('active');
  // $('.chuncheonBox02 .slickWrap').on('afterChange', function (init, event, slick, currentSlide, nextSlide) {
  //   $('.chuncheonBox02 .slickWrap .slide').removeClass('active');
  //   $('.chuncheonBox02 .slickWrap .slick-current').addClass('active');
  // });





  $(".chuncheonBox03 .slideWrap .slick").slick({
    autoplay: false,
    arrows: true,
    prevArrow: ('.chuncheonBox03 .controlBox .prevButton'),
    nextArrow: ('.chuncheonBox03 .controlBox .nextButton'),
    accessibility: false,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    zIndex: 100,
    pauseOnHover: false,
    speed: 1500,
  });

$('.chuncheonBox03 .mainSlide').each(function () {
  const $mainSlideWrap = $(this);
  const $slideMain = $mainSlideWrap.find('.slideMain');
  const $sliderNav = $mainSlideWrap.find('.slideNav');
  const $thumbSlides = $sliderNav.find('.thumbSlide');

  $sliderNav.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: $slideMain,
    variableWidth: true,
    focusOnSelect: true,
    arrows: false,
  });

  $slideMain.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $sliderNav,
    arrows: true,
    prevArrow: $mainSlideWrap.find('.control .prev'),
    nextArrow: $mainSlideWrap.find('.control .next'),
  });

  $slideMain.on('afterChange', function (event, slick, currentSlide) {
    $thumbSlides.removeClass('is-selected');
    $thumbSlides.eq(currentSlide).addClass('is-selected');

    $sliderNav.slick('slickGoTo', currentSlide);
  });

  $thumbSlides.removeClass('is-selected');
  $thumbSlides.eq(0).addClass('is-selected');
});





});
