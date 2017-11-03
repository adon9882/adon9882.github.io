$(function(){

var define_btn_value = "投注方式<span class='red01'>(必選)</span>";

/*
Lightbox Control
*/
	$(".sportteryfl_draw_lightbox").hide();
	/*Open Lightbox*/
	$(".sportteryfl_type").on('click',function(){
		$(".sportteryfl_draw_lightbox").show();
		$(".sportteryfl_draw_select").animate({"bottom":"2em"},400,function(){
			$(".sportteryfl_draw_lightbox").show();
		});
	})
	/*Close Lightbox*/
	$(".sportteryfl_draw_checked").on('click',function(){
		$(".sportteryfl_draw_select").animate({"bottom":"-20em"},400,function(){
			$(".sportteryfl_draw_lightbox").hide();
		});
	})
/*
Normal Content
*/

	/*Buttom Trigger*/
	$(".sportteryfl_draw_b").each(function(i){
		$(this).on('click',function(){
			$(".sportteryfl_draw_b2").removeClass('on');
			if($(this).hasClass('on')){
				$(this).removeClass('on');
			}else{
				$(this).addClass('on');
			}
			/*Collect Select Value*/
			var sel_value = Array();
			var sel_value2 = Array();
			var vector = 0;
			var insert_html = '';
			var insert_value = '';
			$(".sportteryfl_draw_b").each(function(i){
				if($(this).hasClass('on')){
					sel_value[vector]=$(this).text();
					sel_value2[vector]=i;
					vector++;
				};
				insert_html = sel_value.join(',');
				insert_value = sel_value2.join(',');
				if(vector==0){
					insert_html = define_btn_value;
				};
				$(".sportteryfl_type").html(insert_html);
				$(".sportteryfl_draw_b_value").val(insert_value);
				$(".sportteryfl_draw_b_more_value").val('');
			});// end --Collect Select Value

		});
	});// end --Buttom Trigger
/*
More Content
*/
	$(".sportteryfl_draw_more").hide();
	/*Open More Content*/
	$(".sportteryfl_draw_up").on('click',function(){
		if($(this).find(".sportteryfl_draw_arw").hasClass("sportf_rotate")){
			$(this).next(".sportteryfl_draw_more").hide();
			$(this).find(".sportteryfl_draw_arw").removeClass('sportf_rotate');
		}else{
			$(this).next(".sportteryfl_draw_more").show();
			$(this).find(".sportteryfl_draw_arw").addClass('sportf_rotate');
		}
	})
	/*Trigger Buttom*/
	$(".sportteryfl_draw_b2").each(function(i){
		$(this).on('click',function(){
			var select_more_value = '';
			var select_more_value2 = '';
			$(".sportteryfl_draw_b").removeClass('on');
			if($(this).hasClass('on')){
				$(".sportteryfl_draw_b2").removeClass('on');
				$(this).removeClass('on');
			}else{
				$(".sportteryfl_draw_b2").removeClass('on');
				$(this).addClass('on');
				var select_more_value = $(this).text();
				var select_more_value2 = i;
			}
			/*Collect Select Value*/
			$(".sportteryfl_draw_b_value").val('');
			$(".sportteryfl_type").text(select_more_value);
			$(".sportteryfl_draw_b_more_value").val(select_more_value2);
			//end --Collect Select Value
			
		})
	})

	//一般投注
	$(".sportteryfl_td").each(function(){
		$(this).on('click',function(){
			if($(this).hasClass('on')){
				$(this).removeClass('on');
			}else{
				$(this).addClass('on');
			}

		});
	});
	//膽拖投注
	var dan_length = $(".sportteryfl_dan").length;
	if(dan_length<=2){
		$(".sportteryfl_tg").addClass('bnone');
		$(".sportteryfl_draw_close").hide();
		$(".sportteryfl_draw_b").eq(0).click();//默認2串1
	}else{
		$(".sportteryfl_tg").removeClass('bnone');
		$(".sportteryfl_draw_close").show();
	}
	$(".sportteryfl_dan").each(function(){

		$(this).on('click',function(){
			if($(this).find('.sportteryfl_tg').hasClass('bnone')){ //if has class bnone, do nothing and return;
				return;
			}
			if($(this).find('.sportteryfl_tg').hasClass('on')){
				$(this).find('.sportteryfl_tg').removeClass('on');
			}else{
				$(this).find('.sportteryfl_tg').addClass('on');
			}
		})
	})

})// end fn