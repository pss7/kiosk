
$(function () {

  //내곁에 춘천 - 춘천시 대표 축제
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

  //내곁에 춘천 - 추천코스 
  const $tabMenu = $('.courseBox .tabMenu li');
  const $tabContents = $('.courseBox .slideTabContentBox .slideTabContent');
  const initializedTabs = [];

  $tabContents.hide().first().show();
  $tabMenu.children().removeClass('active');
  $tabMenu.first().children().addClass('active');

  initSlick(1);
  initializedTabs.push(1);

  $tabMenu.on('click', function () {
    const idx = $(this).index();
    const tabIndex = idx + 1;

    $tabMenu.children().removeClass('active');
    $(this).children().addClass('active');

    $tabContents.hide().eq(idx).show();

    if (!initializedTabs.includes(tabIndex)) {
      initSlick(tabIndex);
      initializedTabs.push(tabIndex);
    } else {
      updateActive(tabIndex);
    }
  });

  function initSlick(tabIndex) {
    const $wrap = $(`.courseBox .slideTabContent0${tabIndex} .slickWrap .slick`);
    const $infoList = $(`.courseBox .slideTabContent0${tabIndex} .slideInfoList li`);
    const $slides = $(`.courseBox .slideTabContent0${tabIndex} .slickWrap .slide`);

    if ($wrap.length === 0) return;

    $wrap.slick({
      autoplay: false,
      arrows: true,
      prevArrow: `.courseBox .slideTabContent0${tabIndex} .control .prev`,
      nextArrow: `.courseBox .slideTabContent0${tabIndex} .control .next`,
      variableWidth: true,
      accessibility: false,
      dots: false,
      draggable: true,
      infinite: true,
      slidesToScroll: 1,
      pauseOnHover: false,
      speed: 1500,
      zIndex: 100,
    });

    $infoList.removeClass('active');
    $infoList.eq(0).addClass('active');
    $slides.removeClass('active');
    $wrap.find('.slick-current').addClass('active');

    $wrap.on('afterChange', function (event, slick, currentSlide) {
      $infoList.removeClass('active');
      $infoList.eq(currentSlide).addClass('active');

      $slides.removeClass('active');
      $wrap.find('.slick-current').addClass('active');
    });

    $infoList.on('click', function () {
      const index = $(this).index();
      $wrap.slick('slickGoTo', index);
    });
  }

  function updateActive(tabIndex) {
    const $wrap = $(`.courseBox .slideTabContent0${tabIndex} .slickWrap .slick`);
    const $infoList = $(`.courseBox .slideTabContent0${tabIndex} .slideInfoList li`);
    const $slides = $(`.courseBox .slideTabContent0${tabIndex} .slickWrap .slide`);

    const currentIndex = $wrap.slick('slickCurrentSlide');

    $infoList.removeClass('active');
    $infoList.eq(currentIndex).addClass('active');
    $slides.removeClass('active');
    $wrap.find('.slick-current').addClass('active');
  }

  //내곁에 춘천 - 추천코스(상세)
  $('.courseDetailBox .mapContentTabBox .mapContentBox').hide();
  $('.courseDetailBox .mapContentTabBox .mapContentBox').first().show();
  $('.courseDetailBox .courseBox02 .box .mapBox button').click(function () {

    $('.courseDetailBox .courseBox02 .box .mapBox button').removeClass('active');
    $(this).addClass('active');

    const idx = $(this).index();

    $('.courseDetailBox .mapContentTabBox .mapContentBox').hide();
    $('.courseDetailBox .mapContentTabBox .mapContentBox').eq(idx).fadeIn(1000);

  });




});

