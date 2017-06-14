var index = function () {
	var checkSupportStorage = function () {
		if (typeof(Storage) == "undefined" ) {
			console.error("Your browser does not support HTML5 localStorage. Try upgrading.");
		} else {
			console.info("Both localStorage and sessionStorage support is there.");
		}
	}
	
	return {
		checkSupportStorage: checkSupportStorage
	}
}()

$(document).ready(function () {
	document.title = "Adam's Resume";
	index.checkSupportStorage();
	pageUtil.load();
	
	var sessionLang = sessionStorage.getItem('langCode');
	if (!sessionLang) {
		sessionLang = constant.defaultLang;
	}
	langUtil.changeLang(sessionLang);
});