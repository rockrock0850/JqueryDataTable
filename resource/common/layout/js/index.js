document.title = "Adam's Resume";
var index = function () {
	
	var bootstrap = function () {
		checkSupportStorage();
		pageUtil.load();
		
		var sessionLang = sessionStorage.getItem('langCode');
		
		if (!sessionLang) {
			sessionLang = constant.defaultLang;
		}
		
		setTimeout(function () {
			langUtil.changeLang(sessionLang);
		}, 700);
	}
	
	function checkSupportStorage () {
		if (typeof(Storage) == "undefined" ) {
			console.error("Your browser does not support HTML5 localStorage. Try upgrading.");
		} else {
			console.info("Both localStorage and sessionStorage support is there.");
		}
	}
	
	return {
		bootstrap: bootstrap
	}
}();

$(document).ready(function () {
	index.bootstrap();
});