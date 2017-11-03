$(function(){

	$('.lro_subti').cycle({ fx: 'scrollDown', speed:    900, timeout:  2000});
	var spor_number = Array('每位至少选一个号码','至少选二个号码','至少选三个号码');
	$(".draw_bl").each(function(i){
		$(".draw_bl").eq(i).on('click',function(){
			$(".draw_bl").removeClass('draw_switch_hover');
			$(this).addClass('draw_switch_hover');
			$(".lor_recycle").click();
			$(".spor_title1").text(spor_number[i]);
			$(".tpor_type").text($(this).text());
			if(i==0){
				$(".spor_numtitle").eq(0).text('百位');
				$(".redBallArea2, .redBallArea3").show();
			}else{
				$(".spor_numtitle").eq(0).text('选号');
				$(".redBallArea2, .redBallArea3").hide();
			}
		})
	});

});