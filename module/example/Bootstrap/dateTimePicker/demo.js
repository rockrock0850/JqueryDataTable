var demo = (function() {
	var init = function() {
		initDataTimePicker();
	}
	
	/* BEGIN Private Method */
		
	var initDataTimePicker = function() {
		if($().datetimepicker) {
			$('.date-datetimepicker').datetimepicker({
				format: 'yyyy-mm-dd hh:ii', // 日期格式
				//startDate: dateBegin,  可選起始日期+時間
				//endDate: moment().format('YYYY-MM-DD hh:mm'), 可選結束日期+時間
				// pickerPosition: "top-left", 設定視窗彈出位置
				autoclose: true, // 選完日期自動關閉日曆
				todayBtn: true  // 顯示[今天]按鈕
			});
		}
	}
	
	/* END Private Method */
	
	return{
		init: init
	}
})()

$(document).ready(function() {
	demo.init();
});