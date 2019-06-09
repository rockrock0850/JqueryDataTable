document.title = "Adam's Resume";
var index = function () {
	
	var bootstrap = function () {
		checkSupportStorage();
		pageUtil.load();
		
		var sessionLang = sessionStorage.getItem('langCode');
		
		if (!sessionLang) {
			sessionLang = constant.defaultLang;
		}
		
		langUtil.changeLang(sessionLang);
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

var now = new Date().getTime();

$(document).ready(function () {
	index.bootstrap();
});