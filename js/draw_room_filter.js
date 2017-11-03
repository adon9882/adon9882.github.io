$.fn.drawroom = function(a,b){
	return;//close
		var dpav = {c:Array(),d:$('.draw_switch'),e:$('.draw_chk'),f:$(".draw_sel"),g:"draw_switch_hover"};
		for(var l =0; l< dpav.f.length; l++){
			dpav.c[l]=l;
		}
		var h = function(i){
			dpav.d.removeClass(dpav.g);
			dpav.d.eq(i).addClass(dpav.g);
		}
		$(this).on('change',function(){
			var sii = $(this).val();
			dpav.c = [];
			var i = 0;
			for(var l =0; l< dpav.f.length; l++){
				if(dpav.f.eq(l).hasClass(a[sii])){
					dpav.c[i] = l;
					dpav.f.eq(l).show();
					i++;
				}else{
					dpav.f.eq(l).hide();
				}
			}
			h(0);
		});
		dpav.d.each(function(i){
			$(this).on('click',function(){
				dpav.e.hide();
				for(l in dpav.c){
					if(dpav.e.eq(dpav.c[l]).hasClass(b[i])){
						dpav.e.eq(dpav.c[l]).show();
					}
				}
				h(i);
			})
		});
}

