var langUtil = function () {
	
	var langs = ['en', 'zh-TW'];
	
	var changeLang = function(code) {
		if (!code) {
			code = sessionStorage.getItem('langCode');
		}
		
		var uri = 'resource/common/json/lang/' + code + '.json';
		
		if ($.inArray(code, langs) == 1){
			$.getJSON(uri, translate);
		}else{
			$.getJSON('resource/common/json/lang/' + constant.defaultLang + '.json', translate);
		}
		
		if (!code) {
			return;
		}
		
		sessionStorage.setItem('langCode', code);
	}
	
	function translate (data){
		$("[tkey]").each(function() {
			var tkey = $(this).attr('tkey');
			var stringTrans = data[tkey];
			
			if (!stringTrans) {
				stringTrans = '<span style="color: red; font-family: cursive;">Property not found.</span>';
			}
			
			var tagName = $(this)[0].tagName;
			if (tagName == 'INPUT' || tagName == 'TEXTAREA') {
				$(this).attr('placeholder', stringTrans);
			} else {
				$(this).html(stringTrans);	
			}
		});
	}
	
	return {
		changeLang: changeLang
	}
}()