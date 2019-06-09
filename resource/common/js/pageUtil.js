var pageUtil = function () {	
	
	var load = function () {
		$.each($('*'), function () {
			var path = $(this).attr('loadpage');
			
			if (path) {
				$(this).load(path + '?stamp=' + new Date().getTime());
				$(this).removeAttr('loadpage');
			}
		});
	}
	
	return {
		load: load
	}
}();