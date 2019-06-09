//# sourceURL=menu.js
var menu = function () {
	var setMmenuClickEvent = function () {
		var $a = $('nav#nav a');
		
		$a.unbind('click').click(function () {
			var path = $(this).attr('menuPath');
			var code = $(this).attr('code');
			
			changContent(path);
			langUtil.changeLang(code);
		});
	}
	
	var changContent = function (path) {
		if(!path) {
			return;
		}
		
		if (!path || path == 'index.html') {
			location.reload();
			window.location.href = "#menu";
		} else {
			window.location.href = "#content";
		}
		
		$('section#content').empty().attr('loadPage', path);
		pageUtil.load();
	}
	
	return {
		bootstrap: function () {
			setMmenuClickEvent();
		}
	}
}()

$(document).ready(function() {
	menu.bootstrap();
});