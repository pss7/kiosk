
$(function () {



  $('.festivalBox .slideWrap .slick').slick({
    autoplay: false,
    arrows: true,
    prevArrow: ('.festivalBox .slideWrap .controlBox .prevButton'),
    nextArrow: ('.festivalBox .slideWrap .controlBox .nextButton'),
    accessibility: false,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    zIndex: 100,
    pauseOnHover: false,
    speed: 1500,
  });

  $('.festivalBox .slideWrap .controlBox .prevButton').on('click', function () {
    $('.festivalBox .slideWrap .tabContent:visible .slick').slick('slickPrev');
  });

  $('.festivalBox .slideWrap .controlBox .nextButton').on('click', function () {
    $('.festivalBox .slideWrap .tabContent:visible .slick').slick('slickNext');
  });

  $('.festivalBox .mainSlide').each(function () {
    const $mainSlideWrap = $(this);
    const $slideMain = $mainSlideWrap.find('.slideMain');
    const $sliderNav = $mainSlideWrap.find('.slideNav');
    const $thumbSlides = $sliderNav.find('.thumbSlide');

    $sliderNav.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: $slideMain,
      focusOnSelect: true,
      vertical: true,
      verticalSwiping: true,
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
