(function($){
	$.fn.abbroller = function(options){
		var settings = $.extend({
			pattern: 'th > abbr, td > abbr'
        }, options);
        $(settings.pattern).each(function(){
	        $(this).wrapInner('<span></span>');
			if($(this).width() < $(this).parent().width()){
				$(this).addClass('abbroller');
			}
		});
		$(window).on('resize', function(){
			$(settings.pattern).each(function(){
				if($(this).width() < $(this).parent().width()){
					$(this).addClass('abbroller');
				}else{
					$(this).removeClass('abbroller');
				}
			});
		});
	};
}(jQuery));