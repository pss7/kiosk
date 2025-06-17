$(function () {

  $(window).on('load', function () {
    $('.orgInfoBox').addClass('effect');
  });

  $('.chuncheonViewBox .slickBox .slick').slick({
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






















  //내곁에 춘천 - 추천코스

  
  const $tabMenu = $('.chuncheonBox02 .tabMenu li');
  const $tabContents = $('.chuncheonBox02 .slideTabContentBox .slideTabContent');
  const initializedTabs = [];

  // 초기 설정
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
      // 이미 초기화된 경우에도 active 클래스는 관리해줘야 함
      updateActive(tabIndex);
    }
  });

  function initSlick(tabIndex) {
    const $wrap = $(`.slideTabContent0${tabIndex} .slickWrap .slick`);
    const $infoList = $(`.slideTabContent0${tabIndex} .slideInfoList li`);
    const $slides = $(`.slideTabContent0${tabIndex} .slickWrap .slide`);

    if ($wrap.length === 0) return;

    $wrap.slick({
      autoplay: false,
      arrows: true,
      prevArrow: `.slideTabContent0${tabIndex} .control .prev`,
      nextArrow: `.slideTabContent0${tabIndex} .control .next`,
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

    // 초기 active 처리
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
    const $wrap = $(`.slideTabContent0${tabIndex} .slickWrap .slick`);
    const $infoList = $(`.slideTabContent0${tabIndex} .slideInfoList li`);
    const $slides = $(`.slideTabContent0${tabIndex} .slickWrap .slide`);

    const currentIndex = $wrap.slick('slickCurrentSlide');

    $infoList.removeClass('active');
    $infoList.eq(currentIndex).addClass('active');
    $slides.removeClass('active');
    $wrap.find('.slick-current').addClass('active');
  }




















  

  //내곁에 춘천 - 추천코스(상세)
  $('.chuncheonCourseBox .mapContentTabBox .mapContentBox').hide();
  $('.chuncheonCourseBox .mapContentTabBox .mapContentBox').first().show();
  $('.chuncheonCourseBox .courseBox02 .box .mapBox button').click(function () {

    $('.chuncheonCourseBox .courseBox02 .box .mapBox button').removeClass('active');
    $(this).addClass('active');

    const idx = $(this).index();

    $('.chuncheonCourseBox .mapContentTabBox .mapContentBox').hide();
    $('.chuncheonCourseBox .mapContentTabBox .mapContentBox').eq(idx).fadeIn(1000);

  });



















  $('.chuncheonBox03 .tabContentBox .tabContent').hide();
  $('.chuncheonBox03 .tabContentBox .tabContent').first().show();
  $('.chuncheonBox03 .tabMenu li').click(function () {

    $('.chuncheonBox03 .tabMenu li').children().removeClass('active');
    $(this).children().addClass('active');

    const idx = $(this).index();

    $('.chuncheonBox03 .tabContentBox .tabContent').hide();
    const $target = $('.chuncheonBox03 .tabContentBox .tabContent').eq(idx).show();

    $target.find('.slick').slick('setPosition');
    $target.find('.slideMain').slick('setPosition');
    $target.find('.slideNav').slick('setPosition');

  });

  $('.chuncheonBox03 .slideWrap .slick').slick({
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

  $('.chuncheonBox03 .controlBox .prevButton').on('click', function () {
    $('.chuncheonBox03 .tabContent:visible .slick').slick('slickPrev');
  });

  $('.chuncheonBox03 .controlBox .nextButton').on('click', function () {
    $('.chuncheonBox03 .tabContent:visible .slick').slick('slickNext');
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


  //청사안내
  $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
  $('.cityHallGuideBox .guideMapBox .guideMapImage').last().show();

  $('.cityHallGuideBox .tabInfoBox').hide();
  $('.cityHallGuideBox .tabInfoBox').last().show();

  $('.cityHallGuideBox .guideMapList02 > li').click(function () {

    $('.cityHallGuideBox .guideMapList02 > li').children().removeClass('active');
    $(this).children().addClass('active');

    const idx = $(this).index();

    $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
    $('.cityHallGuideBox .guideMapBox .guideMapImage').eq(idx).show();

    $('.cityHallGuideBox .tabInfoBox').hide();
    $('.cityHallGuideBox .tabInfoBox').eq(idx).show();

  });













});
