(function ($) { 

	"use strict";
	
	var singlecarosel = function ($scope, $) {
		
		
        // single-item-carousel
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:false,
                smartSpeed: 500,
                autoplay: true,
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
                    1200:{
                        items:1
                    }

                }
            });    		
        }

	
	}
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/recvite_funfact.default', singlecarosel);
		elementorFrontend.hooks.addAction('frontend/element_ready/recvite_testimonial.default', singlecarosel);
	});
})(window.jQuery);