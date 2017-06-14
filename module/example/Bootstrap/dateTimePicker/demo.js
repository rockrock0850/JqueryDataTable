//# sourceURL=dateTimePicker.js
var demo = (function() {
	var init = function() {
		initDateTimePickers();
		
		var code = sessionStorage.getItem('langCode');
		langUtil.changeLang(code);
	}
	
	var reInitializePickers = function() {
		var formData = window.form2object('settingForm');
		var $picker1 = $('div#demoPicker1');
		var $picker2 = $('div#demoPicker2');
		
		$('div[id^=demoPicker]').datetimepicker('remove');// 移除Date Time Picker設定
		$picker1.datetimepicker({
			format: 'yyyy-mm-dd hh:ii', // 日期格式
			startDate: formData.begin,// 可選起始日期+時間
			endDate: formData.end,// 可選結束日期+時間
			//pickerPosition: "top-left", 設定視窗彈出位置
			autoclose: true, // 選完日期自動關閉日曆
			todayBtn: true  // 顯示[今天]按鈕
		});
		$picker2.datetimepicker({
			format: 'yyyy-mm-dd hh:ii', // 日期格式
			startDate: formData.begin,// 可選起始日期+時間
			endDate: formData.end,// 可選結束日期+時間
			//pickerPosition: "top-left", 設定視窗彈出位置
			autoclose: true, // 選完日期自動關閉日曆
			todayBtn: true  // 顯示[今天]按鈕
		});
		
		$('form#settingForm').find('input').val('');
	}
	
	/* Inner Method 
	========================================================= */
	var initDateTimePickers = function() {
		if($().datetimepicker) {
			$('.date-datetimepicker').datetimepicker({
				language: 'en',
				format: 'yyyy-mm-dd hh:ii', // 日期格式
				autoclose: true, // 選完日期自動關閉日曆
				todayBtn: true  // 顯示[今天]按鈕
			});
		}
		
		setFlexiblePos();
	}
	
	var setFlexiblePos = function () {
		var pos = '';
		$.each($('.date-datetimepicker'), function (i) {
			var $this = $(this);
			
			if (i%2 == 0) {
				pos = $this.position();
				return;
			}
			$this.parent().css('margin-left', -85-pos.left);
		});
	}
	
	return{
		init: init,
		reInitializePickers: reInitializePickers
	}
})()

$(document).ready(function() {
	demo.init();
	
	$('button#setButton').unbind('click').click(function() {
		demo.reInitializePickers();
	});
});