/* Set the defaults for DataTables initialisation */
$.extend( true, $.fn.dataTable.defaults, {
	"sDom": "<'row'<'col-md-6 col-sm-12'f>r<'col-md-6 col-sm-12'l>><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
	"sPaginationType": "bootstrap",
	"oLanguage": {
		"sLengthMenu": "每頁顯示筆數:  _MENU_",
		"sInfo": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
		"sSearch": "搜尋: ",
		"sEmptyTable" : "查無資料",
		"sInfoEmpty" : "",
		"sZeroRecords": "未符合條件",
		"sInfoFiltered": "(過濾於 _MAX_ 筆數)"
	},
	"iScrollDuration" : 500,
	"iDisplayLength" : 100,
	"initComplete" : function(settings, json){}
} );


/* Default class modification */
$.extend( $.fn.dataTableExt.oStdClasses, {
	"sWrapper": "dataTables_wrapper form-inline"
} );


/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
{
	return {
		"iStart":         oSettings._iDisplayStart,
		"iEnd":           oSettings.fnDisplayEnd(),
		"iLength":        oSettings._iDisplayLength,
		"iTotal":         oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
		"iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
	};
};
/* Bootstrap style pagination control */$.extend( $.fn.dataTableExt.oPagination, {
    "bootstrap": {
        "fnInit": function( oSettings, nPaging,fnDraw) {
            var oLang = oSettings.oLanguage.oPaginate;
            var fnClickHandler = function ( e ) {				
                e.preventDefault();
				
				// 呼叫「$.fn.DataTable.ARAP_TOOLS」判斷是否可換頁，若否則顯示提示訊息
                if($.fn.DataTable.ARAP_TOOLS)
				{
					var isChanged = $.fn.DataTable.ARAP_TOOLS.getChange();
					var forceChange = $.fn.DataTable.ARAP_TOOLS.getForceChange();
					if(isChanged == true && forceChange == false) 
					{
						$.fn.DataTable.ARAP_TOOLS.showWarringMessage();
						return;
					}
				} 
				
                if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
                    fnDraw( oSettings );
                }
				
				$('.dataTables_scrollBody').animate({scrollTop: 0}, oSettings.iScrollDuration);
            };
 
            $(nPaging).addClass('pagination').attr('align', 'right').append(
                '<ul class="pagination">' +
                    '<li class="prev disabled"><a href="#">‹‹ 第一頁</a></li>' +
                    '<li class="prev disabled"><a href="#">‹ 上一頁</a></li>'+
                    '<li class="next disabled"><a href="#">下一頁 ›</a></li>' +
                    '<li class="next disabled"><a href="#">最後一頁 ››</a></li>' +
                '</ul>'
            );
            var els = $('a', nPaging);
            $(els[0]).bind('click.DT', { action: "first" }, fnClickHandler);
            $(els[1]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
            $(els[2]).bind('click.DT', { action: "next" }, fnClickHandler);
            $(els[3]).bind('click.DT', { action: "last" }, fnClickHandler);
            
            // 加入對「$.fn.DataTable.ARAP_TOOLS」初始化
            if($.fn.DataTable.ARAP_TOOLS)
        	{	
				$.fn.DataTable.ARAP_TOOLS.init();
        	}
        },
 
        "fnUpdate": function ( oSettings,fnDraw ) {
            var iListLength = 5;
            var oPaging = oSettings.oInstance.fnPagingInfo();
            var an = oSettings.aanFeatures.p;
            var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);
 
            if ( oPaging.iTotalPages < iListLength) {
                iStart = 1;
                iEnd = oPaging.iTotalPages;
            }
            else if ( oPaging.iPage <= iHalf ) {
                iStart = 1;
                iEnd = iListLength;
            } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
                iStart = oPaging.iTotalPages - iListLength + 1;
                iEnd = oPaging.iTotalPages;
            } else {
                iStart = oPaging.iPage - iHalf + 1;
                iEnd = iStart + iListLength - 1;
            }
 
            for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
                // Remove the middle elements
                $('li:gt(1)', an[i]).filter(':not(.next)').remove();
 
                // Add the new list items and their event handlers
                for ( j=iStart ; j<=iEnd ; j++ ) {
                sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
                    $('<li '+sClass+'><a href="#">'+j+'</a></li>')
                        .insertBefore( $('li.next:first', an[i])[0] )
                        .bind('click', function (e) {
                            e.preventDefault();
							
							// 呼叫「$.fn.DataTable.ARAP_TOOLS」判斷是否可換頁，若否則顯示提示訊息
							if($.fn.DataTable.ARAP_TOOLS)
							{
								var isChanged = $.fn.DataTable.ARAP_TOOLS.getChange();
								var forceChange = $.fn.DataTable.ARAP_TOOLS.getForceChange();
								
								if(isChanged == true && forceChange == false) 
								{
									$.fn.DataTable.ARAP_TOOLS.showWarringMessage();
									return;
								}
							}
							
                            oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                            fnDraw( oSettings );
							
							$('.dataTables_scrollBody').animate({scrollTop: 0}, oSettings.iScrollDuration);
                        } );
                }
 
                // Add / remove disabled classes from the static elements
                if ( oPaging.iPage === 0 ) {
                    $('li.prev', an[i]).addClass('disabled');
                } else {
                    $('li.prev', an[i]).removeClass('disabled');
                }
 
                if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
                    $('li.next', an[i]).addClass('disabled');
                } else {
                    $('li.next', an[i]).removeClass('disabled');
                }
            }
        }
    }
} );
/* Bootstrap style full number pagination control */
$.extend( $.fn.dataTableExt.oPagination, {
    "bootstrap_full_number": {
        "fnInit": function( oSettings, nPaging, fnDraw ) {
            var oLang = oSettings.oLanguage.oPaginate;
            var fnClickHandler = function ( e ) {
                e.preventDefault();
				
				// 呼叫「$.fn.DataTable.ARAP_TOOLS」判斷是否可換頁，若否則顯示提示訊息
				if($.fn.DataTable.ARAP_TOOLS)
				{
					var isChanged = $.fn.DataTable.ARAP_TOOLS.getChange();
					var forceChange = $.fn.DataTable.ARAP_TOOLS.getForceChange();
					
					if(isChanged == true && forceChange == false) 
					{
						$.fn.DataTable.ARAP_TOOLS.showWarringMessage();
						return;
					}
				}
				
                if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
                    fnDraw( oSettings );
                }
				
				$('.dataTables_scrollBody').animate({scrollTop: 0}, oSettings.iScrollDuration);
            };
 
            $(nPaging).attr('align', 'right').append(
                '<ul class="pagination">' +
                    '<li class="prev disabled"><a href="#" title="' + oLang.sFirst + '"><i class="fa fa-angle-double-left"></i></a></li>' +
                    '<li class="prev disabled"><a href="#" title="' + oLang.sPrevious + '"><i class="fa fa-angle-left"></i></a></li>'+
                    '<li class="next disabled"><a href="#" title="' + oLang.sNext + '"><i class="fa fa-angle-right"></i></a></li>' +
                    '<li class="next disabled"><a href="#" title="' + oLang.sLast + '"><i class="fa fa-angle-double-right"></i></a></li>' +
                '</ul>'
            );
            var els = $('a', nPaging);
            $(els[0]).bind('click.DT', { action: "first" }, fnClickHandler);
            $(els[1]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
            $(els[2]).bind('click.DT', { action: "next" }, fnClickHandler);
            $(els[3]).bind('click.DT', { action: "last" }, fnClickHandler);
        },
 
        "fnUpdate": function ( oSettings, fnDraw ) {
            var iListLength = 5;
            var oPaging = oSettings.oInstance.fnPagingInfo();
            var an = oSettings.aanFeatures.p;
            var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);
 
            if ( oPaging.iTotalPages < iListLength) {
                iStart = 1;
                iEnd = oPaging.iTotalPages;
            }
            else if ( oPaging.iPage <= iHalf ) {
                iStart = 1;
                iEnd = iListLength;
            } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
                iStart = oPaging.iTotalPages - iListLength + 1;
                iEnd = oPaging.iTotalPages;
            } else {
                iStart = oPaging.iPage - iHalf + 1;
                iEnd = iStart + iListLength - 1;
            }
 
            if (oPaging.iTotalPages < 0) {
				$('.pagination', an[i]).css('visibility', 'hidden');
			} else {
				$('.pagination', an[i]).css('visibility', 'visible');
			}
 
            for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
                // Remove the middle elements
                $('li:gt(1)', an[i]).filter(':not(.next)').remove();
 
                // Add the new list items and their event handlers
                for ( j=iStart ; j<=iEnd ; j++ ) {
                 sClass = (j==oPaging.iPage+1) ? 'class="active"' : '';
                    $('<li '+sClass+'><a href="#">'+j+'</a></li>')
                        .insertBefore( $('li.next:first', an[i])[0] )
                        .bind('click', function (e) {
                            e.preventDefault();
							
							// 呼叫「$.fn.DataTable.ARAP_TOOLS」判斷是否可換頁，若否則顯示提示訊息
							if($.fn.DataTable.ARAP_TOOLS)
							{
								var isChanged = $.fn.DataTable.ARAP_TOOLS.getChange();
								if(isChanged == true) 
								{
									$.fn.DataTable.ARAP_TOOLS.showWarringMessage();
									return;
								}
							}
							
                            oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                            fnDraw( oSettings );
                        } );
                }
 
                // Add / remove disabled classes from the static elements
                if ( oPaging.iPage === 0 ) {
                    $('li.prev', an[i]).addClass('disabled');
                } else {
                    $('li.prev', an[i]).removeClass('disabled');
                }
 
                if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
                    $('li.next', an[i]).addClass('disabled');
                } else {
                    $('li.next', an[i]).removeClass('disabled');
                }
            }
        }
    }
} );


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ( $.fn.DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend( true, $.fn.DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn default",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info modal"
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible dropdown
	$.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}