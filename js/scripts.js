$(document).ready(function () {

    'use strict';

    /*-----------------------------------------------------------------
        owlCarousel
    -------------------------------------------------------------------*/

    var services = $('.services-gallery');
    services.owlCarousel({
        loop: true,
        margin: 40,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var testimony = $('.testimonial');

    testimony.owlCarousel({
        loop: true,
        margin: 90,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });


    var dribbbleshots = $('.gallery-carousel-dribbble');

    dribbbleshots.owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    /*-----------------------------------------------------------------
        magnificPopup
    -------------------------------------------------------------------*/

    portafolioPopup();
    shotsdribbblePopup();

    function portafolioPopup() {
        $('.popup-gallery-portafolio').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }

        });
    }

    function shotsdribbblePopup() {
        $('.popup-gallery-dribbble-shots').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }

        });
    }


    /*-----------------------------------------------------------------
        sticky nav
    -------------------------------------------------------------------*/

    stickyNav();


    function stickyNav() {
        var stickyNavTop = $('.nav').offset().top;

        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function () {
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top

            // if we've scrolled more than the navigation, change its position to fixed to stick to top,
            // otherwise change it back to relative
            if (scrollTop > stickyNavTop) {
                $('.nav').addClass('sticky');
            } else {
                $('.nav').removeClass('sticky');
            }
        };

        stickyNav();
        // and run it again every time you scroll
        $(window).scroll(function () {
            stickyNav();
        });
    }

    /*-----------------------------------------------------------------
         Smooth Scroll
    -------------------------------------------------------------------*/

    $("#nav-scroll-smooth ul li a[href^='#'], .menu-list-top li a[href^='#'], .section-home-text a, .section-cta a, .section-cta-2 a, .section-portafolio a").on('click', function (e) {

        e.preventDefault();

        var hash = this.hash;

        $('html, body').stop().animate({
            scrollTop: $(hash).offset().top
        }, 1000, "easeInOutExpo");

    });
    
    /*-----------------------------------------------------------------
        Close mobile bootstrap menu after click
    -------------------------------------------------------------------*/
    
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });

});
