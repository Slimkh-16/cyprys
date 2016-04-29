// input focus
(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.input-focus' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      $(this).addClass('input--filled')
      // classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    $(this).addClass('input--filled')
    // classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      $(this).removeClass('input--filled')
      // classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();
// input-focus
$(document).ready(function() { 
  // go top
  $(document).on('click','.js_top',function(){
    $('html,body').animate({scrollTop: 0},500);
  });
  // go top
  // mobile nav
  $('.nav-butt').on('click',function(){
    $(this).toggleClass('open');
    $('.navigation-menu').toggleClass('active');
    return false;
  });
  $(document).on('click','.js_close',function(){
    $('.nav-butt').removeClass('open');
    $('.navigation-menu').removeClass('active');
    return false;
  });
  // mobile nav
  // mobile function
  if ($(window).width() < 767){
    $('.right-title').not('.about .right-title').on('click',function(){
      $(this).toggleClass('open');
      $(this).parents('.right-about').toggleClass('active');
      $(this).parents('.right-about').parent().toggleClass('open-form');
      $(this).parent().find('form').slideToggle(500);
    });
  } ;
  $(document).click(function(event) {
    if ($(event.target).closest(".navigation-menu").length) {
      return
    }
    $('.nav-butt').removeClass('open');
    $('.navigation-menu').removeClass('active');
    event.stopPropagation();
  });
  // $(window).on('resize', (function(){
  //   var fn = function(){
  //     var top = $(document).scrollTop(),
  //         _height = $(window).height(),
  //         _width = $(window).width();
  //     if (_width < 767){
  //       $('.right-title').on('click',function(){
  //         $(this).toggleClass('open');
  //         $(this).parents('.right-about').toggleClass('active');
  //         $(this).parents('.swiper-wrapper').parent().toggleClass('open-form');
  //         $(this).parent().find('form').slideToggle(500);
  //       });
  //     } 
  //   };
  //   fn();
  //   return fn;
  // })());
  $(document).on('click','.mobile-nav',function(){
    $('.mobile-nav').removeClass('active');
    $('.slider-sm-cont').removeClass('active');
    $(this).addClass('active');
    $(this).next().addClass('active');
  });
  $(document).on('click','.mobile-nav.active',function(){
    $(this).removeClass('active');
    $(this).next().removeClass('active');
  });
  // mobile function
  // laung menu
  $('.right-nav .drop').hover(
    function(){
      $(this).addClass('open');
      $('.right-nav .drop').find('.drop-box').addClass('active');
    },
    function(){
      $(this).removeClass('open');
      $('.right-nav .drop').find('.drop-box').removeClass('active');
    }
  );
  // laung menu
  // spinner
  $('.time').on('click',function(){
    $(this).addClass('onfocus').removeClass('fild-pl');
    var thisTime = $(this);
      $(document).on('click',function(event) {
        if ($(event.target).closest(thisTime).length) {
          return
        }
        $(thisTime).addClass('fild-pl').removeClass('onfocus');
        var valH = $(thisTime).find('.spinner input[data-step='+ '1' + ']').val();
        var valM = $(thisTime).find('.spinner input[data-step='+ '5' +']').val();
        $(thisTime).find('.time-input').val(valH + ':' + valM);
      event.stopPropagation();
    });
  });
  // $('.time').hover(
  //   function(){
  //     $(this).addClass('onfocus').removeClass('fild-pl');
  //   },
  //   function(){
  //     $(this).addClass('fild-pl').removeClass('onfocus');
  //     var valH = $(this).find('.spinner input[data-step='+ '1' + ']').val();
  //     var valM = $(this).find('.spinner input[data-step='+ '5' +']').val();
  //     $(this).find('.time-input').val(valH + ':' + valM);
  //   }
  // );
  // spinner
  // foot nav
  $('.foot-nav ul li').on('click',function(){
    $('.foot-nav ul li').removeClass('menu--current');
    $(this).addClass('menu--current');
  });
  // foot nav
  // about
  $('.js_feed').on('click',function(){
    $(this).parents('.right-about').addClass('act-feed')
    $(this).parents('.right-about').find('.feed-container').addClass('act');
    return false;
  });
  $('.js_back').on('click',function(){
    $(this).parents('.right-about').removeClass('act-feed')
    $(this).parents('.right-about').find('.feed-container').removeClass('act');
    return false;
  });
  $('.js_map').on('click',function(){
    $('body').addClass('open-map');
  });
  $('.js_close_map').on('click',function(){
    $('body').removeClass('open-map');
  })
  // about/
  // big slider
  var swiperBig = new Swiper('.slider-big', {
      paginationClickable: true,
      speed: 1500,
      direction: 'vertical',
      simulateTouch:false,
      onlyExternal:true,

  });
  $('.foot-nav ul li[data-slide]').on('click',function(){
    var data_slide = $(this).attr('data-slide'),
        width_link = $(this).width();
        $('li.menu-line').width(width_link + 40);
        swiperBig.slideTo(data_slide);
  });
  // big slider
  // device
  var isMobile = false;
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i)) {
    isMobile = true;
  };
  if (isMobile == true) {
    $('.slider-img .par').addClass('no-transform');
  }
  if (isMobile == false) {
    // parallax img
    $('html').mousemove(function(e){
        var wx = $(window).width();
        var wy = 250;
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var newx = x - wx/2;
        var newy = y - wy/2;
        $('.parallax').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -5;
            TweenMax.to($(this), 1, {x: (20 - newx*speed), y: (20+ newy*speed)});
        });
    });
  // parallax img
    $(".small-slider-pagination--1").on('click', '.small-page', function(){
      sliderSmallSale.slideTo($(this).index(), 1000);
    });
    $(".small-slider-pagination--2").on('click', '.small-page', function(){
      sliderSmallAbout.slideTo($(this).index(), 1000);
    });
    $(".small-slider-pagination--3").on('click', '.small-page', function(){
      sliderSmallRental.slideTo($(this).index(), 1000);
    });
    $(".small-slider-pagination--4").on('click', '.small-page', function(){
      sliderSmallDriver.slideTo($(this).index(), 1000);
    });
    $(".small-slider-pagination--5").on('click', '.small-page', function(){
      sliderSmallTaxi.slideTo($(this).index(), 1000);
    });
  }
  // device
  // slider small 1
  var sliderSmallSale = new Swiper('.slider-small--1', {
      nextButton: '.swiper-next--1',
      prevButton: '.swiper-prev--1',
      wrapperClass: "swiper-wrapper--1",
      speed: 1000,
      loop: false,
      effect:'fade',
      // parallax: true,
      simulateTouch:false,
      onlyExternal:true
  });
  var galleryThumbsSale = new Swiper('.small-slider-pagination--1', {
      slideToClickedSlide: true,
      speed: 1000,
      // parallax: true,
      simulateTouch:false,
      onlyExternal:true
  });
 
  sliderSmallSale.params.control = galleryThumbsSale;
  galleryThumbsSale.params.control = sliderSmallSale;
  // slider small 1
  // slider small 2
  var sliderSmallAbout = new Swiper('.slider-small--2', {
      nextButton: '.swiper-next--2',
      prevButton: '.swiper-prev--2',
      wrapperClass: "swiper-wrapper--2",
      speed: 1000,
      effect:'fade',
      loop: false,
      simulateTouch:false,
      onlyExternal:true
  });
  var galleryThumbsAbout = new Swiper('.small-slider-pagination--2', {
        slideToClickedSlide: true,
        speed: 1000,
        simulateTouch:false,
        onlyExternal:true
  });
  sliderSmallAbout.params.control = galleryThumbsAbout;
  galleryThumbsAbout.params.control = sliderSmallAbout;
  // slider small 2
  // slider small 3
  var sliderSmallRental = new Swiper('.slider-small--3', {
      nextButton: '.swiper-next--3',
      prevButton: '.swiper-prev--3',
      wrapperClass: "swiper-wrapper--3",
      speed: 1000,
      effect:'fade',
      loop: false,
      parallax: true,
      simulateTouch:false,
      onlyExternal:true
  });
  var galleryThumbsRental = new Swiper('.small-slider-pagination--3', {
        slideToClickedSlide: true,
        speed: 1000,
        parallax: true,
        simulateTouch:false,
        onlyExternal:true
  });
  sliderSmallRental.params.control = galleryThumbsRental;
  galleryThumbsRental.params.control = sliderSmallRental;
  // slider small 3
  // slider small 4
  var sliderSmallDriver = new Swiper('.slider-small--4', {
      nextButton: '.swiper-next--4',
      prevButton: '.swiper-prev--4',
      wrapperClass: "swiper-wrapper--4",
      speed: 1000,
      effect:'fade',
      loop: false,
      simulateTouch:false,
      onlyExternal:true
  });
  var galleryThumbsDriver = new Swiper('.small-slider-pagination--4', {
        slideToClickedSlide: true,
        speed: 1000,
        simulateTouch:false,
        onlyExternal:true
  });
  sliderSmallDriver.params.control = galleryThumbsDriver;
  galleryThumbsDriver.params.control = sliderSmallDriver;
  // slider small 4
  // slider small 5
  var sliderSmallTaxi = new Swiper('.slider-small--5', {
      nextButton: '.swiper-next--5',
      prevButton: '.swiper-prev--5',
      wrapperClass: "swiper-wrapper--5",
      speed: 1000,
      effect:'fade',
      loop: false,
      simulateTouch:false,
      onlyExternal:true
  });
  var galleryThumbslTaxi = new Swiper('.small-slider-pagination--5', {
      slideToClickedSlide: true,
      speed: 1000,
      simulateTouch:false,
      onlyExternal:true
  });
  sliderSmallTaxi.params.control = galleryThumbslTaxi;
  galleryThumbslTaxi.params.control = sliderSmallTaxi;
  // slider small 5
  // carousel
  // select
  $(".chosen-select").chosen({disable_search_threshold: 10});
  // select
  // datepicker
  $(".datepicker").glDatePicker({
    cssName: 'flatwhite',
    dowOffset: 1,
    allowMonthSelect: false,
    allowYearSelect: false
  });
  // datepicker
  // map contact
    if( $('#map').length ) {
      initialize();
   };
  // google map
  function initialize() {

   var myLatlng = new google.maps.LatLng(34.921430, 33.636477);
   var myCenter = new google.maps.LatLng(34.921430, 33.636477);
   var mapOptions = {
     zoom: 15,
     center: myCenter,
     // scrollwheel: false,
     disableDefaultUI: false
   };
   var map = new google.maps.Map(document.getElementById('map'), mapOptions);

   // var image = '/images/marker-map.png';
   var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     // icon:image
   });
  }
  // google map
  // feedback form
  // $('#header .feedback').on('click',function(){
  //   $(this).toggleClass('active');
  //   $('.feedback-form').slideToggle('slow');
  //   $('.feedback-form #id1').focus();
  //   return false;
  // });
  // $('.shale-page .info-box .feedback').on('click',function(){
  //   $(this).toggleClass('active');
  //   $('body,html').animate({scrollTop: 0}, 1000);
  //   setTimeout(function(){
  //     $('.feedback-form').slideToggle('slow');
  //     $('.feedback-form #id1').focus();
  //   },1000);
  //   return false;
  // });
  // $('.feedback-form .close').on('click',function(){
  //   $('.feedback').removeClass('active');
  //   $('.feedback-form').slideUp('slow');
  //   return false;
  // });
  // feedback form
});
