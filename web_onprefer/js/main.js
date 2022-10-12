$(function () {
  $('.main').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });
  $('.company1').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });

  $(".glasses").slick({
    dots: false,
    infinite: true,
    // variableWidth: true,
    slidesToShow: 4,
    responsive: [
      {breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]  //반응형 포인트 지정
  });

  $(".cs").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    responsive: [
      {breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]  //반응형 포인트 지정
  });


  if ($(window).width() > 1024) {
    $('#main .slide1 img').attr('src', 'img/main1.jpg')
    $('#main .slide2 > img').attr('src', 'img/main2.jpg')
    $('#main .slide3 img').attr('src', 'img/main3.jpg')
    $('#design .img_box img').attr('src', 'img/design.png')
    $('#custom .slick-prev').css('background', 'url(img/arrow1.png) no-repeat center')
    $('#custom .slick-next').css('background', 'url(img/arrow2.png) no-repeat center')
    $('#product .slick-prev').css('background', 'url(img/arrow1.png) no-repeat center')
    $('#product .slick-next').css('background', 'url(img/arrow2.png) no-repeat center')
  }
  else {
    $('#main .slide1 img').attr('src', 'img/main1_m.jpg')
    $('#main .slide2 > img').attr('src', 'img/main2_m.jpg')
    $('#main .slide3 img').attr('src', 'img/main3_m.jpg')
    $('#design .img_box img').attr('src', 'img/design_m.jpg')
    $('#custom .slick-prev').css('background', 'url(img/arrow5.png) no-repeat center')
    $('#custom .slick-next').css('background', 'url(img/arrow6.png) no-repeat center')
    $('#product .slick-prev').css('background', 'url(img/arrow5.png) no-repeat center')
    $('#product .slick-next').css('background', 'url(img/arrow6.png) no-repeat center')
  }

  $(window).resize(function () {
    if ($(window).width() > 1024) {
      $('#main .slide1 img').attr('src', 'img/main1.jpg')
      $('#main .slide2 > img').attr('src', 'img/main2.jpg')
      $('#main .slide3 img').attr('src', 'img/main3.jpg')
      $('#design .img_box img').attr('src', 'img/design.png')
      $('#custom .slick-prev').css('background', 'url(img/arrow1.png) no-repeat center')
      $('#custom .slick-next').css('background', 'url(img/arrow2.png) no-repeat center')
      $('#product .slick-prev').css('background', 'url(img/arrow1.png) no-repeat center')
      $('#product .slick-next').css('background', 'url(img/arrow2.png) no-repeat center')
    }
    else {
      $('#main .slide1 img').attr('src', 'img/main1_m.jpg')
      $('#main .slide2 > img').attr('src', 'img/main2_m.jpg')
      $('#main .slide3 img').attr('src', 'img/main3_m.jpg')
      $('#design .img_box img').attr('src', 'img/design_m.jpg')
      $('#custom .slick-prev').css('background', 'url(img/arrow5.png) no-repeat center')
      $('#custom .slick-next').css('background', 'url(img/arrow6.png) no-repeat center')
      $('#product .slick-prev').css('background', 'url(img/arrow5.png) no-repeat center')
      $('#product .slick-next').css('background', 'url(img/arrow6.png) no-repeat center')
    }
  })

})//ready
