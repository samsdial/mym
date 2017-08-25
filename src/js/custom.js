$(function(){
    var contentSections = $('main section');
    //open navigation on mobile
    $('.nav_trigger').on('click', function(){
        $('header').toggleClass('nav-is-visible');
    });
    // Animation menu click
    $(function() {
        var link = $('.eco ul li a[href*=#]');
        var link = $('.eco a[href*=#]');
      var $target, targetOffset, url;
      link.click(function() {
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
    // nav bar
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 300,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();
    // Fin nav
    // slider slick home
    $('.slider').slick({
        dots: true,
        arrows: true,
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
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        }]
    });
    // acordeon para cualquier panel
    $('.panel').slideUp();
    $('.panel-js').on('click', function(evt){
        evt.preventDefault();
        var button = $(this);
        // button.addClass('active');
        if (button.hasClass('active')){
            button.addClass('in');
            button.removeClass('active');
            $('.panel').not(this).each(function() {
                $(this).slideUp();
            });
            //console.log('active');
        } else if (button.hasClass('in')){
            button.removeClass('in');
            button.addClass('active');
            $('.panel').not(this).each(function() {
                $(this).slideDown();
            });
            //console.log('on');
        }
    });
    // formumlario
    $('.alerta').slideUp();
    $('.envio').click(function() {
        /* Act on the event */
        var type = $('#type option:selected').text();
        var fullName = $('#fullName').val();
        var business = $('#business').val();
        var city = $('#city').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var message = $('#message').val();
        if(type == 'Tipo' || fullName == '' || business == '' || city == '' || phone == '' || email == '' || message == ''){
            if(type == 'Tipo'){
                $('.select').addClass('error');
                $('#type').focus();
                return false;
            }else{
                $('.select').removeClass('error');
            }if (fullName == ''){
                $('.fullName').addClass('error');
                $('#fullName').focus();
                return false;
            }else{
                $('.fullName').removeClass('error');
            }if (business == ''){
                $('.business').addClass('error');
                $('#business').focus();
                return false;
            }else{
                $('.business').removeClass('error');
            }if(city == ''){
                $('.city').addClass('error');
                $('#city').focus();
                return false;
            }else{
                $('.city').removeClass('error');
            }if(phone == ''){
                $('.phone').addClass('error');
                $('#phone').focus();
                return false;
            }else{
                $('.phone').removeClass('error');
            }if(email == '' || !validacion_email.test(email)){
                $('.email').addClass('error');
                $('#email').focus();
                return false;
            }else{
                $('.email').removeClass('error');
            }if(message == ''){
                $('.message').addClass('error');
                $('#message').focus();
                return false;
            }else{
                $('.message').removeClass('error');
            }
        }else{
            $('.message').removeClass('error');
            var datos = '&type=' + type + '&fullName=' + fullName + '&business=' + business + '&city=' + city + '&phone=' + phone + '&email=' + email + '&message=' + message ;
            $.ajax({
                method: 'Post',
                url:'envio.php',
                dataType: 'json',
                data:datos,
            }).done(function(msg){
                if(msg.success){
                    $('.alerta').slideDown('slow');
                    $('.alerta p').html('Gracias, pronto nos contactaremos.');
                    $('#type option:selected').text();
                    $('#fullName').val('');
                    $('#business').val('');
                    $('#city').val('');
                    $('#phone').val('');
                    $('#email').val('');
                }else{
                    $('.alerta').slideDown('slow');
                    $('.alerta p').html('Error, Intente luego.');
                }
            });
            return false;
        }
    });
});
