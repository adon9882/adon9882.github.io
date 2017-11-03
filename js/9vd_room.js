$(function(){
	//Click checked box 
	$(".nivdr_input, .nivdr_top_left").on('click',function(){
		if($('.nivdr_inputcheck').hasClass('nivdr_checked')){
			$('.nivdr_inputcheck').removeClass('nivdr_checked');
			$(".nivdr_percent").css({visibility: 'hidden'});
		}else{
			$('.nivdr_inputcheck').addClass('nivdr_checked');
			$(".nivdr_percent").css({visibility: 'visible'});
		}
	})
	$(".nivdr_table").eq(0).removeClass('nivdr_table_border');

	//Game List Select
	$(".nivdr_game_list").each(function(i){
		var tg = $(this);
		tg.find('.nivdr_game_btn').each(function(s){
			$(this).on('click',function(){
				if(tg.find('.nivdr_game_btn').eq(s).hasClass('on')){
					tg.find('.nivdr_game_btn').eq(s).removeClass('on');
				}else{
					// tg.find('.nivdr_game_btn').removeClass('on');
					tg.find('.nivdr_game_btn').eq(s).addClass('on');
				}
			});
		})
	})
	//Clear All Selected
	$(".lor_recycle").on('click',function(){
		$(".nivdr_game_btn").removeClass('on');
	});
})