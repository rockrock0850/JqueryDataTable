var main = (function() {
	var init = function() {
		document.title = "Adam's Resume";
		
		var $header = $('section#header');
		var $content = $('section#content');
		var $footer = $('section#footer');
		
		$header.load('resource/common/layout/header.html', seMmenuClickListener);
		$content.load('module/resume/profile.html');
		$footer.load('resource/common/layout/footer.html');
	}
	
	/* BEGIN Private Method */
	
	var seMmenuClickListener = function() {
		var $a = $('nav#nav a');
		$a.unbind('click').click(function() {
			var menuPath = $(this).attr('menuPath');
			var $content = $('section#content');
			
			$content.load(menuPath);
			menuPath == 'index.html' ? 
				window.location.href = "#header" : window.location.href = "#content";
		});
	}
		
	/* END Private Method */
	
	return {
		init: init
	}
})()

$(document).ready(function() {
	main.init();
});