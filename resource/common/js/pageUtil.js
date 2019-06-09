var pageUtil = function () {	
	
	var load = function () {
		var now = new Date().getTime();
		
		$.each($('*'), function () {
			var path = $(this).attr('loadPage');
			
			if (path) {
				$(this).load(path + '?' + now);
				$(this).removeAttr('loadPage');
			}
		});
	}
	
	return {
		load: load
	}
}();