var languageUtil = function () {	
	var langs = ['en', 'zh-TW'];
	var changeLangs = function($this) {
		var code = $this.attr('code');
		
		if ($.inArray(code, langs) == 1){
			$.getJSON('resource/common/json/lang/' + code + '.json', translate);
		}else{
			$.getJSON('resource/common/json/lang/' + 'en.json', translate);
		}
	}
	
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
		changeLangs: changeLangs,
		translate: translate
	}
}()