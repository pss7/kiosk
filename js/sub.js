$(function () {

  $(window).on('load', function () {
    $('.chuncheonBox03 .tabContent').addClass('effect');
  });

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

  //내곁에 춘천 - 춘천시 대표축제
  $('.chuncheonBox03 .tabContentBox .tabContent').hide();
  $('.chuncheonBox03 .tabContentBox .tabContent').first().show();

  let isSliding = false;
  let currentTabIndex = -1;

  $('.chuncheonBox03 .tabMenu li').click(function () {
    const idx = $(this).index();
    if (idx === currentTabIndex || isSliding) return;

    isSliding = true;
    currentTabIndex = idx;

    $('.chuncheonBox03 .tabMenu li').children().removeClass('active');
    $(this).children().addClass('active');

    $('.chuncheonBox03 .tabContentBox .tabContent').hide();
    const $target = $('.chuncheonBox03 .tabContentBox .tabContent').eq(idx).show();

    requestAnimationFrame(() => {
      $target.find('.slideMain').each(function () {
        const $slider = $(this);

        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('setPosition');

          setTimeout(() => {
            $slider.slick('slickGoTo', 0, true);

            const $mainSlideWrap = $slider.closest('.mainSlide');
            const $thumbSlides = $mainSlideWrap.find('.thumbSlide');
            const $prevBtn = $mainSlideWrap.find('.control .prev');
            const $nextBtn = $mainSlideWrap.find('.control .next');

            $thumbSlides.removeClass('is-selected');
            $thumbSlides.eq(0).addClass('is-selected');

            const totalSlides = $slider.slick('getSlick').slideCount;
            $prevBtn.prop('disabled', true);
            $nextBtn.prop('disabled', totalSlides <= 1);

            isSliding = false;
          }, 0);
        } else {
          isSliding = false;
        }
      });

      $target.find('.slideNav, .slick').each(function () {
        const $slider = $(this);
        if ($slider.hasClass('slick-initialized')) {
          $slider.slick('setPosition');
        }
      });
    });
  });

  $('.chuncheonBox03 .slideWrap .slick').slick({
    autoplay: false,
    arrows: true,
    prevArrow: '.chuncheonBox03 .controlBox .prevButton',
    nextArrow: '.chuncheonBox03 .controlBox .nextButton',
    accessibility: false,
    dots: false,
    draggable: true,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    swipe: false,
    zIndex: 100,
    pauseOnHover: false,
    speed: 1500,
    adaptiveHeight: true,
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
    const $prevBtn = $mainSlideWrap.find('.control .prev');
    const $nextBtn = $mainSlideWrap.find('.control .next');
    const thumbCount = $thumbSlides.length;
    const disableNavSlide = thumbCount <= 3;

    let isSlidingInner = false;

    if (disableNavSlide) {
      $sliderNav.addClass('no-slick');
    } else {
      $sliderNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: $slideMain,
        variableWidth: false,
        focusOnSelect: true,
        arrows: false,
        swipe: true,
        infinite: false,
        centerMode: false,
        speed: 1500,
      });
    }

    $slideMain.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $prevBtn,
      nextArrow: $nextBtn,
      adaptiveHeight: true,
      swipe: true,
      infinite: false,
      speed: 1500,
      easing: 'ease',
    });

    function updateMainSlideButtons(current, total) {
      const isFirst = current === 0;
      const isLast = current === total - 1;
      $prevBtn.prop('disabled', isFirst);
      $nextBtn.prop('disabled', isLast);
    }

    $slideMain.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      isSlidingInner = true;

      // 🔥 액티브 클래스를 먼저 적용
      $thumbSlides.removeClass('is-selected');
      $thumbSlides.eq(nextSlide).addClass('is-selected');

      if (!disableNavSlide) {
        const visibleStart = $sliderNav.slick('slickCurrentSlide');
        const visibleEnd = visibleStart + 2;

        if (nextSlide < visibleStart) {
          $sliderNav.slick('slickGoTo', nextSlide, true);
        } else if (nextSlide > visibleEnd) {
          $sliderNav.slick('slickGoTo', nextSlide - 2, true);
        }
      }
    });

    $slideMain.on('afterChange', function (event, slick, currentSlide) {
      isSlidingInner = false;
      updateMainSlideButtons(currentSlide, slick.slideCount);
    });

    $prevBtn.on('click', function (e) {
      e.preventDefault();

      if (isSlidingInner) return;

      const slick = $slideMain.slick('getSlick');
      if (slick.currentSlide === 0) {
        return;
      }

      $slideMain.slick('slickPrev');
    });

    $nextBtn.on('click', function (e) {
      e.preventDefault();

      if (isSlidingInner) return;

      const slick = $slideMain.slick('getSlick');
      if (slick.currentSlide === slick.slideCount - 1) {
        return;
      }

      $slideMain.slick('slickNext');
    });

    const initialIndex = $slideMain.slick('slickCurrentSlide');
    const totalSlides = $slideMain.slick('getSlick').slideCount;
    updateMainSlideButtons(initialIndex, totalSlides);

    $thumbSlides.removeClass('is-selected');
    $thumbSlides.eq(initialIndex).addClass('is-selected');

  });
  $('.chuncheonBox03 .thumbSlide').on('click', function (e) {
    e.preventDefault();

    const $mainSlideWrap = $(this).closest('.mainSlide');
    const $slideMain = $mainSlideWrap.find('.slideMain');
    const index = $(this).index();

    if (!$slideMain.hasClass('slick-initialized')) return;

    $slideMain.slick('slickGoTo', index);
  });

  //청사안내
  $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
  $('.cityHallGuideBox .guideMapBox .guideMapMainImage').show();

  $('.cityHallGuideBox .tabInfoBox').hide();
  $('.cityHallGuideBox .tabInfoMainBox').show();

  $('.cityHallGuideBox .guideMapList02 > li').click(function () {

    $('.cityHallGuideBox .guideMapList02 > li').children().removeClass('active');
    $(this).children().addClass('active');

    const idx = $(this).index();

    $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
    $('.cityHallGuideBox .guideMapBox .guideMapImage').eq(idx).show();

    $('.cityHallGuideBox .tabInfoBox').hide();
    $('.cityHallGuideBox .tabInfoBox').eq(idx).show();

  });

  $('.cityHallGuideBox .location116').click(function () {
    $('.cityHallGuideBox .tabInfoBox').hide();
    $('.cityHallGuideBox .tabInfoBox99').show();
    $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
    $('.cityHallGuideBox .guideMapImage99').show();
  });
  $('.cityHallGuideBox .location117').click(function () {
    $('.cityHallGuideBox .tabInfoBox').hide();
    $('.cityHallGuideBox .tabInfoBox01').show();
    $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
    $('.cityHallGuideBox .guideMapImage01').show();
  });
  $('.cityHallGuideBox .location118').click(function () {
    $('.cityHallGuideBox .tabInfoBox').hide();
    $('.cityHallGuideBox .tabInfoBox01').show();
    $('.cityHallGuideBox .guideMapBox .guideMapImage').hide();
    $('.cityHallGuideBox .guideMapImage01').show();
  });

  //코스 모달
  $('.chuncheonCourseBox .courseBtn').click(function () {
    $('.couresModalWrap').addClass('active');
  });
  $('.couresModalWrap .closeBtn').click(function () {
    $('.couresModalWrap').removeClass('active');
  });


});
