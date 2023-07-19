"use strict";

jQuery(function ($) {
  $.fn.scrollReveal = function (item) {
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        initialScroll = $(window).scrollTop(),
        items = $('.' + item),
        scroll;
    items.each(function () {
      if ($(this).offset().top >= windowHeight) {
        $(this).addClass('hidden');
      } else {
        $(this).removeClass('hidden');
      }
    }); //on scroll

    $(window).scroll(function (event) {
      scroll = $(window).scrollTop();
      items.each(function () {
        if ($(this).offset().top <= scroll + windowHeight - 50) {
          $(this).removeClass('hidden');
        }
      });
    });
    return this;
  };

  $(document).ready(function () {
    var showactor = $('#film_show'),
        films = $('.info__filmography');

    if (typeof showactor !== "undefined") {
      showactor.click(function () {
        if (!$(this).hasClass('active')) {
          $(this).addClass('active');
          films.css('max-height', 'none');
        } else {
          $(this).removeClass('active');
          films.css('max-height', '0px');
        }
      });
    }

    var actor = $('.actor');

    if (typeof actor !== "undefined") {
      $.fn.scrollReveal('actor');
    }

    var emp = $('.emp');

    if (typeof actor !== "undefined") {
      $.fn.scrollReveal('emp');
    }

    var open = $('.header__menu'),
        nav = $('.nav'),
        close = $('.nav__header_close');

    if (typeof open !== "undefined") {
      open.click(function () {
        nav.removeClass('hidden');
      });
      close.click(function () {
        nav.addClass('hidden');
      });
    }

    $('.nav').mouseup(function (e) {
      var div = $("#navbar");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.parent().addClass('hidden');
      }
    });
    var scrollTop = $('.scroll-top');

    if (typeof scrollTop !== "undefined") {
      scrollTop.click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, "slow");
        return false;
      });
    }

    var galleryOpt = {
      hideBarsDelay: 100000,
      download: false,
      loop: false,
      counter: false,
      youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
      }
    };
    var galleryOpt2 = {
      selector: 'this',
      hideBarsDelay: 100000,
      download: false,
      loop: false,
      counter: false,
      youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
      }
    };
    var gal = $('.info__photos_gall');

    if (typeof gal !== "undefined" && gal.length == 1) {
      console.log('halo');
      gal.lightGallery(galleryOpt);
    }

    var trailer = $('.trailer');

    if (typeof trailer !== "undefined" && trailer.length  > 0) {
      console.log('halo');
      trailer.lightGallery(galleryOpt2);
    }

    var fullpage = $('#fullpage');

    if (typeof fullpage !== "undefined" && fullpage.length == 1) {
      $('#fullpage').fullpage({
        //options here
        licenseKey: 'E23A2A05-099F4CDC-94EE1466-891B45DA',
        navigation: true,
        navigationPosition: 'right',
        responsiveWidth: 992,
        fixedElements: '.header, .single__footer',
        afterLoad: function afterLoad(origin, destination, direction) {
          var scrtop = $('.scroll-top');
          var index = destination.index;
          $('#counter').text(destination.index + 1);

          if (index === 0 || index === 1) {
            
            scrtop.addClass('down');
            $('.scroll-top').click(function () {
              $.fn.fullpage.moveSectionDown();
            });
          } else {
            
            scrtop.removeClass('down');
            $('.scroll-top').click(function () {
              $.fn.fullpage.moveTo(1);
            });
          }
        }
      });
    }

    $(window).load(function () {
      $('body').addClass('loaded');
      var newsgrid = $('.news_wrap');

      if (typeof newsgrid !== "undefined") {
        newsgrid.masonry({
          // set itemSelector so .grid-sizer is not used in layout
          itemSelector: '.news',
          // use element for option
          columnWidth: '.news',
          percentPosition: true,
          horizontalOrder: true
        });
        $.fn.scrollReveal('news');
      }
    });
  });
});
