$(function(){

	//Remove List fn
	$.fn.removeSelf = function(){
		$(".nvdrl_toto").each(function(i){
			var tg = $(this);
			$(this).find(".nvdrl_list_contentl").on('click',function(){
				tg.animate({height:0,fontSize:0,opacity:0},200,function(){
					tg.remove()
					$(".nvdrl_toto").eq(0).removeClass('nvdrl_list_bg_top');
				});
			})
		});
		$(".nvdrl_toto").eq(0).removeClass('nvdrl_list_bg_top');
	}

	//Get random number
	$.fn.nvdrl_random = function(max,min){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	$.fn.nvdrl_getBall = function(t){
		$(t.tg).on('click',function(){
			var a = Array();
			var b = Array();
			var c = Array();
			b = $.fn.bitrAlgorithm(0,t.main-1,t.main);
			for(var i = 0; i < t.main; i++){
				if(i<t.num){
					e = $.fn.nvdrl_random(t.ball.length,1);
					a[i] = t.ball[e-1];
				}else{
					a[i] = '-';
				}
			}
			for(var j in b){
				c[j] = a[b[j]];
			}
			c1 = c.join('  ');
			c2 = c.join(',');
			var d = "<div class='nvdrl_toto nvdrl_list_bg_top'><table class='nvdrl_list_bg_buttom'><tr style='width:100%;'><td class='nvdrl_list_contentl'></td><td class='nvdrl_list_content2'><span class='nvdrl_number_string red01'>"+c1+"<input type='hidden' class='nvdrl_v' value='"+c2+"'></span><span class='nvdrl_money blue01'>"+t.de+"</span></td></tr></table></div>";
			$(t.fa).append(d);
			$.fn.removeSelf();
			a = '';b = '';c = '';c1 = '';c2 = '';d = '';
		})
	}

	//Clear All
	$(".nvdrl_center .btn3").on('click',function(){
		$('.nvdrl_list_main').text('');
	});

	//click for Aggree
	
	//Click checked box 
	$(".nvdrl_input, .nivdr_bottom").on('click',function(){
		if($('.nvdrl_inputcheck').hasClass('nvdrl_checked')){
			$('.nvdrl_inputcheck').removeClass('nvdrl_checked');
		}else{
			$('.nvdrl_inputcheck').addClass('nvdrl_checked');
		}
	})
	
	//Remove List fn
	$.fn.removeSelf();
})