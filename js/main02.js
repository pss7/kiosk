
$(function () {

  //내곁에 춘천 - 춘천시 대표축제
  $('.festivalBox .tabContentBox .tabContent').hide();
  $('.festivalBox .tabContentBox .tabContent').first().show();

  let isSliding = false;
  let currentTabIndex = -1;

  $('.festivalBox .tabMenu li').click(function () {
    const idx = $(this).index();
    if (idx === currentTabIndex || isSliding) return;

    isSliding = true;
    currentTabIndex = idx;

    $('.festivalBox .tabMenu li').children().removeClass('active');
    $(this).children().addClass('active');

    $('.festivalBox .tabContentBox .tabContent').hide();
    const $target = $('.festivalBox .tabContentBox .tabContent').eq(idx).show();

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

  $('.festivalBox .slideWrap .slick').slick({
    variableWidth: true,
    autoplay: false,
    arrows: true,
    prevArrow: '.festivalBox .controlBox .prevButton',
    nextArrow: '.festivalBox .controlBox .nextButton',
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

  $('.festivalBox .controlBox .prevButton').on('click', function () {
    $('.festivalBox .tabContent:visible .slick').slick('slickPrev');
  });

  $('.festivalBox .controlBox .nextButton').on('click', function () {
    $('.festivalBox .tabContent:visible .slick').slick('slickNext');
  });

  $('.festivalBox .mainSlide').each(function () {
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
        variableWidth: true,
        focusOnSelect: true,
        arrows: false,
        swipe: true,
        infinite: false,
        centerMode: false,
        vertical: true,
        verticalSwiping: true,
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
  $('.festivalBox .thumbSlide').on('click', function (e) {
    e.preventDefault();

    const $mainSlideWrap = $(this).closest('.mainSlide');
    const $slideMain = $mainSlideWrap.find('.slideMain');
    const index = $(this).index();

    if (!$slideMain.hasClass('slick-initialized')) return;

    $slideMain.slick('slickGoTo', index);
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

  //내곁에 춘천 - 여행지추천
  $('.chuncheonBox .detailSlickWrap .slick').slick({
    autoplay: true,
    arrows: true,
    prevArrow: ('.chuncheonBox .detailSlickWrap .control .prev'),
    nextArrow: ('.chuncheonBox .detailSlickWrap .control .next'),
    accessibility: false,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    zIndex: 100,
    pauseOnHover: false,
    speed: 1500,
  });

  //시정알림
  $('.alarmBox .alarmSlideBox .slick').slick({
    autoplay: true,
    arrows: true,
    prevArrow: ('.alarmBox .alarmSlideBox .control .prev'),
    nextArrow: ('.alarmBox .alarmSlideBox .control .next'),
    accessibility: false,
    dots: false,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    zIndex: 100,
    pauseOnHover: false,
    speed: 1500,
  });




});

