var ez_line = function(){
	$(".ez_list").each(function(){
		var ezNum = $(this).find(".ez_num").text();
		$(this).find(".ez_line2").animate({width: ezNum+"%"},1200);
	})};
	setTimeout(function(){ez_line();},600);