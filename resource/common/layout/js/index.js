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
		var menu = 'resource/common/layout/menu.html?' + now;
		var banner = 'resource/common/layout/header.html?' + now;
		var content = 'module/resume/profile.html?' + now;
		var contact = 'resource/common/layout/contact.html?' + now;
		var footer = 'resource/common/layout/footer.html?' + now;
		
		$('section#menu').attr('loadPage', menu);
		$('section#banner').attr('loadPage', banner);
		$('section#content').attr('loadPage', content);
		$('section#contact').attr('loadPage', contact);
		$('section#footer').attr('loadPage', footer);
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