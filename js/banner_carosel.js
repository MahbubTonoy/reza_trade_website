(function ($) { 

    "use strict";
    var bannerjs = function ($scope, $) {
        
        // banner-carousel
        $('.banner-carousel').each(function() {
            let ajax_bannerSlider = $(this).data('owl');
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                    // loop:ajax_bannerSlider.loop,
                    loop:true,
                    margin:30,
                    // nav:ajax_bannerSlider.arrows,
                    nav:false,
                    dots:false,
                    autoplay: ajax_bannerSlider.autoplay,
                    // autoplayTimeout:parseInt(ajax_bannerSlider.autoplay_speed),
                    autoplayTimeout: 8000,
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
