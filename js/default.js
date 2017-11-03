	$(document).bind('mobileinit',function(){
	    $.mobile.loadingMessage = "载入页面ing..";
	    $.mobile.pageLoadErrorMessage = "载入错误页面";
	    $.mobile.page.prototype.options.backBtnText = "返回";
	    $.mobile.dialog.prototype.options.closeBtnText = "关闭";
	    $.mobile.collapsible.prototype.options.expanCueText = "按一下展开内容";
	    $.mobile.collapsible.prototype.options.collapseCueText = "按一下隐藏内容";
	    $.mobile.selectmenu.prototype.options.closeText = "关闭";
	    $.mobile.listview.prototype.options.filterPlaceholder = "筛选项目...";

	})

$(document).ready(function(){
	$("body").append('<div class="mantainBackGround" style="background: #cc374b ;width:100%;height:100%;position:absolute;top:0;left:0;z-index:100;"></div>');
	$.mobile.loading('show')
});
$(window).load(function(){
	setTimeout(function(){
		$(".mantainBackGround").hide();
		$.mobile.loading('hide')
	},500);
});

window.onload=function(){
	setTimeout(function(){
		$(".mantainBackGround").hide();
		$.mobile.loading('hide');
	},1200);
};