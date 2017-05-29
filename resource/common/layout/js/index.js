$(document).ready(function () {
	document.title = "Adam's Resume";
	pageUtil.load();
	$.getJSON('resource/common/json/lang/en.json', languageUtil.translate);
});