$(function () {
    $('.nav_ul ul').hide();
    $('#nav').hover(function () {
      $('.nav_ul ul').stop().slideDown(500)
    }, function () {
      $('.nav_ul ul').stop().slideUp(500)
    })//nav

    sta = 0;
    $('#header .btn1 .sh').click(function(){
      if(sta == 0){
        $('#header .btn1 .sh1').stop().slideDown(500);
        $(this).css('background-image','url(images/x1.png)');
        sta = 1;
      }else{
        $('#header .btn1 .sh1').stop().slideUp(500);
        $(this).css('background-image','url(images/search1.png)');
        sta = 0;
      }
    })

    $('#header .btn2 .kr').click(function(){
      if(sta == 0){
        $('#header .btn2 .kr2').stop().slideDown(500);
        $(this).css('background-image','url(images/len2.png)');
        sta = 1;
      }else{
        $('#header .btn2 .kr2').stop().slideUp(500);
        $(this).css('background-image','url(images/len1.png)');
        sta = 0;
      }
    })
    $('#slide').slick({
      infinite : true,
      autoplay: true,
      autospeed: 3000,
      arrows: false,
      dots: true,
    });//slide

    $('#phone .center').slick({
      slidesToShow: 5,
      infinite : true,
      arrows: false,
      autoplay:true,
      autospeed:3000,
      centerMode: true,
      draggable: true,
    })//center

    $('#youtube .youtube').slick({
      slidesToShow: 4,
      infinite : true,
    })//youtube

    $('.snsbox').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      infinite : true,
    })//sns

    $('#footer_top .logomoa').slick({
      autoplay: true,
      autospeed: 2000,
      slidesToShow: 5,
      arrows: true,
      infinite : true,
    })//footer_top

    $(window).scroll(function () {
      if ($(document).scrollTop() >= 100) {
          $('#header').addClass('fix');
      } else {
          $('#header').removeClass('fix');
      }
  })//window.scroll
  })// ready