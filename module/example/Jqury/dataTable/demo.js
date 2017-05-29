var demo = (function() {
	var init = function() {
		initDataTable();
	}
	
	/* Inner Method 
	========================================================= */
	//初始化DataTable
	var initDataTable = function() {
		timeFlag('BEGIN TIME: ', new Date());
		
		var $table = $('div#searchResult table');
		$table.DataTable({
			paging: true, // 翻頁功能
			lengthChange: true, // 改變每頁顯示數據數量
			pageLength: 10, // 顯示10筆換下一頁
			searching: true, // 過濾功能
			ordering: true, // 排序功能
			info: true, // 頁腳信息
			autoWidth: false, // 自動寬度
			data: getData(), // 注入資料
			columnDefs: [ // 欄位設定
				{orderable: false, targets: []}, // 選擇關閉哪個欄位排序功能(  )
				{
					sWidth: '5.5%', 
					targets: [0], 
					data: null, 
					className: 'osp_features', 
					defaultContent: "<button id='button' class='small'>測試</button>"
				},
				{sWidth: '5.5%', targets: [1], title: '', data: 'FLOW_ID', className: 'FLOW_ID hide'}, 
				{sWidth: '5.5%', targets: [2], title: '案件狀態', data: 'ORDER_STATUS', className: 'ORDER_STATUS'}, 
				{sWidth: '5.5%', targets: [3], title: 'OSP單號', data: 'ODER_M_ID', className: 'ODER_M_ID'}, 
				{sWidth: '5.5%', targets: [4], title: '案件類別 ', data: 'ORDER_TYPE_NAME', className: 'ORDER_TYPE_NAME'}, 
				{sWidth: '5.5%', targets: [5], title: '進件系統', data: 'SOURCE_SYS_ID', className: 'SOURCE_SYS_ID'}, 
				{sWidth: '5.5%', targets: [6], title: '產品類別', data: 'SOURCE_PROD_TYPE_NAME', className: 'SOURCE_PROD_TYPE_NAME'}, 
				{sWidth: '5.5%', targets: [7], title: '交易型態', data: 'OPERATE_TYPE', className: 'OPERATE_TYPE'}, 
				{sWidth: '5.5%', targets: [8], title: '進件時間', data: 'OSP_CREATE_TIME', className: 'OSP_CREATE_TIME'}, 
				{sWidth: '5.5%', targets: [9], title: '門號/代表號/線路編號', data: 'MSISDN', className: 'MSISDN'}, 
				{sWidth: '5.5%', targets: [10], title: '用戶名稱', data: 'CUST_NAME', className: 'CUST_NAME'}, 
				{sWidth: '5.5%', targets: [11], title: '來源單號', data: 'SOURCE_ORDER_ID', className: 'SOURCE_ORDER_ID'}, 
				{sWidth: '5.5%', targets: [12], title: '母子單', data: 'PARTENT_ORDER_ID', className: 'PARTENT_ORDER_ID'}, 
				{sWidth: '5.5%', targets: [13], title: '筆數', data: 'COUNTS', className: 'COUNTS'}, 
				{sWidth: '5.5%', targets: [14], title: '預計作業處理時間', data: 'EXPECT_PROCESS_TIME', className: 'EXPECT_PROCESS_TIME'}, 
				{sWidth: '5.5%', targets: [15], title: '預計完成時間', data: 'EXPECT_COMPLETE_TIME', className: 'EXPECT_COMPLETE_TIME'}, 
				{sWidth: '5.5%', targets: [16], title: '客戶指定生效日', data: 'CUST_SPECIFY_DATE', className: 'CUST_SPECIFY_DATE'}, 
				{sWidth: '5.5%', targets: [17], title: '處理人員', data: 'PROCESS_USER_NAME', className: 'PROCESS_USER_NAME'}
			]
		});
		shiftTableRelatedElements();
		
		timeFlag('END TIME: ', new Date());
	}
	
	//取得資料表的資料
	var getData = function() {
		var data = [];
		for(var i = 0; i < 300; i++) {
			var object = {};
			
			object.FLOW_ID = '測試資料'; 
			object.ORDER_STATUS = '測試資料'; 
			object.ODER_M_ID = '測試資料'; 
			object.ORDER_TYPE_NAME = '測試資料'; 
			object.SOURCE_SYS_ID = '測試資料'; 
			object.SOURCE_PROD_TYPE_NAME = '測試資料'; 
			object.OPERATE_TYPE = '測試資料'; 
			object.OSP_CREATE_TIME = '測試資料'; 
			object.MSISDN = '測試資料'; 
			object.CUST_NAME = '測試資料'; 
			object.SOURCE_ORDER_ID = '測試資料'; 
			object.PARTENT_ORDER_ID = '測試資料'; 
			object.COUNTS = '測試資料'; 
			object.EXPECT_PROCESS_TIME = '測試資料'; 
			object.EXPECT_COMPLETE_TIME = '測試資料'; 
			object.CUST_SPECIFY_DATE = '測試資料'; 
			object.PROCESS_USER_NAME = '測試資料'; 
			data.push(object);
		}
		
		return data;
	}
	
	//
	var timeFlag = function(flag, date) {
		time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		console.log(flag + time);
	}
	
	//
	var shiftTableRelatedElements = function() {
		var $searchResult = $('div#searchResult');
		
		//注意: $=: 尋找xxx屬性內容以xxx結尾之元素
		$searchResult.find("[class$=_length]").addClass('pull-right');// 將dataTable顯示筆數選單靠右
		$searchResult.find('[class$=_filter]').addClass('pull-left');// 將過濾欄位靠左
		$searchResult.find('[class$=_paginate]').attr('align', 'right');// 將dataTable分頁靠右
	}
	
	return{
		init: init
	}
})()

$(document).ready(function() {
	demo.init();
});