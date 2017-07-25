//# sourceURL=dataTable.js
var demo = (function() {
	var setTableClickEvent = function (table) {
		$('table#dataTable').on('click', 'button', function () {
			var $tr = $(this).closest('tr');
			var row = table.row($tr).data();
			console.log(row);
		});
	}
	
	//初始化DataTable
	var initTable = function() {
		timeFlag('BEGIN TIME: ', new Date());
		
		var table = $('table#dataTable').DataTable({
			dom:
				'<"row"<"pull-left"f><"pull-right"l>>' +
				'<"row"<"scrollX"t>>' +
				'<"row"<"pull-left"i><"pull-right"p>>',
			paging: true, // 翻頁功能
			lengthChange: true, // 改變每頁顯示數據數量
			pageLength: 10, // 顯示10筆換下一頁
			searching: true, // 過濾功能
			ordering: true, // 排序功能
			info: true, // 頁腳信息
			autoWidth: false, // 自動寬度
			data: getData(), // 注入資料
			columnDefs: [ // 欄位設定
				{orderable: false, targets: [0]}, // 選擇關閉哪個欄位排序功能(  )
				{targets: '_all', render: function (data, type, full, mate) {
					// console.log(data);
					return data;
				}},
				{
					targets: [0], 
					title: '功能',
					data: null, 
					className: 'dt-nowrap', 
					defaultContent: "<button id='button' class='small'>測試</button>"
				},
				{targets: [1], title: '案件狀態', data: 'ORDER_STATUS', className: 'dt-nowrap'}, 
				{targets: [2], title: 'OSP單號', data: 'ODER_M_ID', className: 'dt-nowrap'}, 
				{targets: [3], title: '案件類別 ', data: 'ORDER_TYPE_NAME', className: 'dt-nowrap'}, 
				{targets: [4], title: '進件系統', data: 'SOURCE_SYS_ID', className: 'dt-nowrap'}, 
				{targets: [5], title: '產品類別', data: 'SOURCE_PROD_TYPE_NAME', className: 'dt-nowrap'}, 
				{targets: [6], title: '交易型態', data: 'OPERATE_TYPE', className: 'dt-nowrap'}, 
				{targets: [7], title: '進件時間', data: 'OSP_CREATE_TIME', className: 'dt-nowrap'}, 
				{targets: [8], title: '門號/代表號/線路編號', data: 'MSISDN', className: 'dt-nowrap'}, 
				{targets: [9], title: '用戶名稱', data: 'CUST_NAME', className: 'dt-nowrap CUST_NAME'}, 
				{targets: [10], title: '來源單號', data: 'SOURCE_ORDER_ID', className: 'dt-nowrap'}, 
				{targets: [11], title: '母子單', data: 'PARTENT_ORDER_ID', className: 'dt-nowrap'}, 
				{targets: [12], title: '筆數', data: 'COUNTS', className: 'dt-nowrap'}, 
				{targets: [13], title: '預計作業處理時間', data: 'EXPECT_PROCESS_TIME', className: 'dt-nowrap'}, 
				{targets: [14], title: '預計完成時間', data: 'EXPECT_COMPLETE_TIME', className: 'dt-nowrap'}, 
				{targets: [15], title: '客戶指定生效日', data: 'CUST_SPECIFY_DATE', className: 'dt-nowrap'}, 
				{targets: [16], title: '處理人員', data: 'PROCESS_USER_NAME', className: 'dt-nowrap'},
				{targets: [17], title: '', data: 'FLOW_ID', className: 'dt-nowrap hide'}
			]
		});
		timeFlag('END TIME: ', new Date());
		setTableClickEvent(table);
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
	
	var timeFlag = function(flag, date) {
		time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		console.log(flag + time);
	}
	
	return{
		bootstrap: function() {
			var code = sessionStorage.getItem('langCode');
			langUtil.changeLang(code);
			
			initTable();
		}
	}
})()

$(document).ready(function() {
	demo.bootstrap();
});