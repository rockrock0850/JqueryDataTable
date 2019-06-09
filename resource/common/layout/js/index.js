document.title = "Adam's Resume";
var index = function () {
	
	var now = new Date().getTime();
	
	var bootstrap = function () {
		init();
		checkSupportStorage();
		pageUtil.load();
		
		var sessionLang = sessionStorage.getItem('langCode');
		
		if (!sessionLang) {
			sessionLang = constant.defaultLang;
		}
		
		langUtil.changeLang(sessionLang);
	}
	
	function init () {
		var menu = 'resource/common/layout/menu.html?stamp=' + now;
		var banner = 'resource/common/layout/header.html?stamp=' + now;
		var content = 'module/resume/profile.html?stamp=' + now;
		var contact = 'resource/common/layout/contact.html?stamp=' + now;
		var footer = 'resource/common/layout/footer.html?stamp=' + now;
		
		$('section#menu').attr('loadpage', menu);
		$('section#banner').attr('loadpage', banner);
		$('section#content').attr('loadpage', content);
		$('section#contact').attr('loadpage', contact);
		$('section#footer').attr('loadpage', footer);
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