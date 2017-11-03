$(function(){
	//呼叫lightbox
	$(".ef_list_btn").on('click',function(){
		$(".ef_lightbox").show();
	});
	$(".ef_lightbox").on('click',function(){
		$(this).hide();
	});
	//點選MENU項目
	$(".ef_redArrow").eq(0).show();
	$(".ef_selCol").each(function(i){
		$(this).on('click',function(){
			if($(this).hasClass("ef_dt")){
				$(".ef_dttable").css('visibility','visible');
				$(".lro_le2").hide();
			}else{
				$(".ef_dttable").css('visibility','hidden');
				$(".lro_le2").show();
			}
			//Table Hide
			$(".lotr2_box").css('visibility','hidden');
			$(".redBallArea").css('visibility','visible');
			$(".ef_down_ilu").show();//end Table Hide

			$(".ef_selCol").removeClass("ef_selCol_sel");
			$(".ef_redArrow").hide();

			$(this).addClass("ef_selCol_sel");
			$(".ef_redArrow").eq(i).show();


			var th1 = $(this).find('.ef_th1').text();
			$(".ef_list_btn").text(th1);

			var efv = $(this).find(".ef_v").val();
			$(".ef_snum").text(efv);
			
			var efm = $(this).find(".ef_mm").val();
			$(".ef_money").text(efm);



			$(".lor_recycle").click();
		})
	})
	$(".ef_selCol").eq(0).click();
})

//趨勢圖
	//校正高度
	$(window).load(function(){
		setTimeout(function(){


			//Ajust Touch Table Height 
			var a = $(".astro_head").outerHeight();
			var b = $(".astro_subject").outerHeight();
			var c = $(".lro_subti").outerHeight();
			var d = $(".lorl_ezto").outerHeight();
			var f = $(".clearbox").outerHeight()*2;
			
			var w =$(window).outerHeight();

			var e = w-a-b-c-d-f;
			$(".touch_move").outerHeight(e);
			$(".touch_move_row").outerHeight(e);

			//Ajust Table Top
			var oo = a+b+c;
			$(".lotr3_col").css({top: oo});
			console.log(oo);

		},200);

		$(".mainContent tr:odd").addClass('odd');
		$(".mainMindR tr:odd").addClass('odd');
	})
	$(function(){

		//切換趨勢圖
		$(".open_trend_grf").on('click',function(){
			if($(".lotr2_box").css('visibility')=='hidden'){
				$(".lotr2_box").css('visibility','visible');
				$(".redBallArea").css('visibility','hidden');
				$(".ef_down_ilu").hide();
			}else{
				$(".lotr2_box").css('visibility','hidden');
				$(".redBallArea").css('visibility','visible');
				$(".lor_recycle").click();
				$(".ef_down_ilu").show();
			}
			
		});

		//Parameter
		var tg={co1:'.mainMindR'};
		//Touch Fn
		$('.pep1').pep({
			axis: "y",
			shouldEase: true,
			easeDuration: '500',
			useCSSTranslation: false,
			start:function(ev, obj){
				PreventFar(ev, obj, tg); 
			},
			drag:function(ev, obj){
				PreventFar(ev, obj, tg); 
			},
			stop: function(ev, obj){
				PreventFar(ev, obj, tg); 
			},
			rest: function(ev, obj){ 
				PreventFar(ev, obj, tg); 
			}
		});
		//Prevent Go so Far
		function PreventFar( ev, obj, tg){
			var x = obj.$el.position().left;
			var y = obj.$el.position().top;
			var all_h = obj.$el.outerHeight() - obj.$el.parent().outerHeight();
			$(tg.co1).stop().css({top: y});
			if ( -y > (all_h) ){
		    	obj.$el.css({ top: -all_h })
		    	$(tg.co1).delay(100).stop().css({top: -all_h});  
			}
		                          
			if ( y > 0 ){ 
		       obj.$el.css({ top: 0 });
		       $(tg.co1).delay(100).stop().css({top: 0});  
			}
		}

		//Select Ball
		$.fn.lortSelectBall = function(tg,r1,r2){
			var main = $(this);
			main.find("."+tg).each(function(i){
				$(this).click(function(){
					if($(this).hasClass(r1)){
						$(this).removeClass(r1).addClass(r2);
					}else{
						$(this).removeClass(r2).addClass(r1);
					}
				})
			})
		}
		$(".mainMinSelect").lortSelectBall("lort_rrr",'lort_cz_red','lort_cz_red2');


	})
