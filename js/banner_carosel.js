(function ($) { 

    "use strict";
    var bannerjs = function ($scope, $) {
        
        // banner-carousel
        $('.banner-carousel').each(function() {
            let ajax_bannerSlider = $(this).data('owl');
      
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                    loop:JSON.parse(ajax_bannerSlider.loop),
                    margin:30,
                    nav:JSON.parse(ajax_bannerSlider.arrows),
                    dots:false,
                    autoplay: JSON.parse(ajax_bannerSlider.autoplay),
                    autoplayTimeout:parseInt(ajax_bannerSlider.autoplay_speed),
                    autoplayHoverPause:false,
                    navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        480:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        800:{
                            items:1
                        },
                        1024:{
                            items:1
                        }
                    }
                }); 
            }   		
        }); 

    // var bannerjs = function ($scope, $) {
        
        
    //     // banner-carousel
    //     if ($('.banner-carousel').length) {
    //         $('.banner-carousel').owlCarousel({
    //             loop:true,
    //             margin:0,
    //             nav:true,
    //             animateOut: 'fadeOut',
    //             animateIn: 'fadeIn',
    //             active: true,
    //             smartSpeed: 1000,
    //             autoplay: 6000,
    //             navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
    //             responsive:{
    //                 0:{
    //                     items:1
    //                 },
    //                 600:{
    //                     items:1
    //                 },
    //                 800:{
    //                     items:1
    //                 },
    //                 1024:{
    //                     items:1
    //                 }
    //             }
    //         });
    //     }

		

    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/recvite_banner.default', bannerjs);
    });
})(window.jQuery);
