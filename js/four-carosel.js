(function ($) { 

	"use strict";
	
	var tema_carosle = function ($scope, $) {
		
		
	    // Four Item Carousel
        if ($('.four-item-carousel').length) {
            $('.four-item-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                smartSpeed: 500,
                autoplay: 5000,
                navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });    		
        }

	
	}
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/recvite_team.default', tema_carosle);
		elementorFrontend.hooks.addAction('frontend/element_ready/recvite_project.default', tema_carosle);
	});
	})(window.jQuery);

