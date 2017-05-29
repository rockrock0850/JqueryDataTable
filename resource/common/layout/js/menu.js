//# sourceURL=menu.js
var menu = function () {
	var setMmenuClickEvent = function () {
		var $a = $('nav#nav a');
		
		$a.unbind('click').click(function () {
			changContent($(this));
			languageUtil.changeLangs($(this));
		});
	}
	
	/* Inner Method
	=================================================================================== */
	var changContent = function ($this) {
		var menuPath = $this.attr('menuPath');
		
		if(!menuPath) {
			return;
		}
		
		if (menuPath == 'index.html' || menuPath == '') {
			location.reload();
			window.location.href = "#menu";
		}
		
		$('section#content').empty().attr('loadPage', menuPath);
		window.location.href = "#content";
		pageUtil.load();
	}
	
	return {
		setMmenuClickEvent: setMmenuClickEvent
	}
}()

$(document).ready(function() {
	menu.setMmenuClickEvent();
});