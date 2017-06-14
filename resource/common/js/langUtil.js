var langUtil = function () {	
	var langs = ['en', 'zh-TW'];
	var changeLang = function(code) {
		var uri = 'resource/common/json/lang/' + code + '.json';
		
		if ($.inArray(code, langs) == 1){
			$.getJSON(uri, translate);
		}else{
			$.getJSON('resource/common/json/lang/en.json', translate);
		}
		
		if (!code) {
			return;
		}
		
		sessionStorage.setItem('langCode', code);
	}
	
	/* Inner Method
	================================================================================================ */
	var translate = function (data){
		$("[tkey]").each(function(index) {
			var $this = $(this);
			var tkey = $this.attr('tkey');
			var stringTrans = data[tkey];
			
			if (!stringTrans) {
				stringTrans = '<span style="color: red; font-family: cursive;">Property not found.</span>';
			}
			
			var tagName = $this[0].tagName;
			if (tagName == 'INPUT' || tagName == 'TEXTAREA') {
				$this.attr('placeholder', stringTrans);
			} else {
				$this.html(stringTrans);	
			}
		});
	}
	
	return {
		changeLang: changeLang
	}
}()