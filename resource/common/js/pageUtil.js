var pageUtil = function () {	
	
	var load = function () {
		$.each($('*'), function () {
			var path = $(this).attr('loadPage');
			
			if (path) {
				$(this).load(path);
				$(this).removeAttr('loadPage');
			}
		});
	}
	
	return {
		load: load
	}
}();