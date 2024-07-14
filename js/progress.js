(function ($) { 

	"use strict";
	
	var progress = function ($scope, $) {
		
		
	 // Progress Bar
	 if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});

	}

	
	}
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/recvite_progress.default', progress);
		elementorFrontend.hooks.addAction('frontend/element_ready/recvite_about_two.default', progress);
	});
	})(window.jQuery);

