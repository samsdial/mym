$(function(){
    var contentSections = $('main section');
    //open navigation on mobile
    $('.nav_trigger').on('click', function(){
        $('header').toggleClass('nav-is-visible');
    });
    // Animation menu click
    $(function() {
      var $target, targetOffset, url;
      $('.nav ul li a[href*=#]').click(function() {
        var $target, targetOffset;
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            targetOffset = $target.offset().top - 80;
            $('html,body').animate({
              scrollTop: targetOffset
            }, 1000);
            return false;
          }
        }
      });
      url = window.location.href.split('#');
      if (window.location.href[1]) {
        $target = $('#' + url[1]);
        if ($target.length) {
          targetOffset = $target.offset().top - 80;
          $('html,body').animate({
            scrollTop: targetOffset
          }, 1000);
          return false;
        }
      }
    });
    // slider slick home
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    // slider slick home
    $('.multi-item').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    // slider slick home
    $('.promo-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
    $('.quality-item').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        autoplay: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
});
