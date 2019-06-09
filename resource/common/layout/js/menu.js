var menu = function () {

	var bootstrap = function () {
		setMmenuClickEvent();
	}
	
	function setMmenuClickEvent () {
		var a = 'nav#nav a';
		
		$(a).unbind('click').click(function () {
			var path = $(this).attr('menuPath');
			var code = $(this).attr('code');
			
			changContent(path);	
			if (code) {
				langUtil.changeLang(code);
			}
		});
	}
	
	function changContent (path) {
		if(!path) {
			return;
		}
		
		if (!path || path == 'index.html') {
			window.location.href = "#menu";
			location.reload();
		} else {
			window.location.href = "#content";
			$('section#content')
				.empty()
				.attr('loadPage', path);
			pageUtil.load();
		}
	}
	
	return {
		bootstrap : bootstrap
	}
}()

$(document).ready(function() {
	menu.bootstrap();
});