

//History
$(function(){
	//Stop and back
	$.fn.BHome = function(url,note){
		var note_txt = "退出后当前投注将清空，确定退出并返回主界面？";
		if(note==1){
			var r=confirm(note_txt);
			if(r){
				window.location = url;
			}else{
				return;
			}
		}else if(note=='back'){
			var r=confirm(note_txt);
			if(r){
				history.back();
			}else{
				return;
			}
			
		}else{
			window.location = url;
		};
	};

	//Hover Small List
	$.fn.smallListMenu = function(){
    	$(".astro_backR1").unbind('mouseenter mouseleave');

    	$(".lor_smallList").unbind('mouseenter mouseleave');

        $(".astro_backR1").hover(
            function(){
                $(".lor_smallList").stop().animate({"right":0},'fast');

            },function(){
                $(".lor_smallList").stop().animate({"right":"-20%"},'slow');

            });

        $(".lor_smallList").mouseover(function(){
        	$(".lor_smallList").stop().animate({"right":0},'fast');

            
        });

        $(".lor_smallList, .astro_backR1").mouseleave(function(){
             $(".lor_smallList").stop().animate({"right":"-20%"},'slow');

        });

	};$.fn.smallListMenu();
	//Tab Switch
	$.fn.history_content = function(i){
			var a = ".sphistory_contents";
			var b = ".sphistory_btn";
			$(b).removeClass('on');
			$(b).eq(i).addClass('on');
			$(a).hide();
			$(a).eq(i).show();
	}
	
	$.fn.history_content(0);
	$(".sphistory_btn").each(function(i){
		$(this).on('click',function(){
			$.fn.history_content(i);//Tab Switch
		})
	})
})

//Game switch fn
var game_ary = Array("胜负","让分胜负","胜分差","大小分","混合过关");
//Define Initial Game
var sportf_games = function(i){
	$.fn.GameSwitch(i);
}
$(function(){


	//Count Total Number
	$.fn.count_total_number = function(){
		var ac = Array();
		if($("#sporttery_f_room5").length>0){
			$.fn.count_total_number_room_five();
		}else{
			$(".sportf_game").each(function(i){
				$(this).find('.sportf_bdn').each(function(er){
					if($(this).hasClass('on')){
						ac[i] = 1;
					};
				});
			})
			var string = 0;
			for(var u in ac){
				if(ac[u]!=''){
					string++;
				}
			}
			$(".sporttery_f_totalNum").text(string);
		};

	}
	//Count Total Number for room2
	$.fn.count_total_number_room_two = function(){
		var ac = Array();
		$(".sportf_bd2_val1").each(function(i){
			var a = $(this).val();
			var b = $(".sportf_bd2_val2").eq(i).val();
			var c = $(".sportf_bd2_val3").eq(i).val();
			if(a!='' || b!='' || c!=''){
				ac[i] = 1;
			}
		})
		var string = 0;
		for(var u in ac){
			if(ac[u]!=''){
				string++;
			}
		}
		$(".sporttery_f_totalNum").text(string);
	}

	//Count Total Number for room4
	$.fn.count_total_number_room_four = function(){
		var ac = Array();
		$(".sportf_bd2_2_val1").each(function(i){
			var a = $(this).val();
			if(a!=''){
				ac[i] = 1;
			}
		})
		var string = 0;
		for(var u in ac){
			if(ac[u]!=''){
				string++;
			}
		}
		$(".sporttery_f_totalNum").text(string);
	}

	//Count Total Number for room5
	$.fn.count_total_number_room_five = function(){
		var ac = Array();
		$(".sportf_mmn1").each(function(i){
			var a = $(this).val();
			var b = $(".sportf_mmn2").eq(i).val();
			var c = $(".sportf_mmn3").eq(i).val();
			var d = $(".sportf_mmn4").eq(i).val();
			if(a!='' || b!='' || c!='' || d!=''){
				ac[i] = 1;
			}
		})
		var string = 0;
		for(var u in ac){
			if(ac[u]!=''){
				string++;
			}
		}
		$(".sporttery_f_totalNum").text(string);
	}
	//Hide Menu
	$(".sportf_lightbox_tbs").hide();
	$(".sportf_game_trend").hide();
	//Menu Show/Hide Control
	$(".ef_list_btn").on('click',function(){
		if($('.sportf_lightbox_tbs').css("display")=='none'){
			$(".sportf_lightbox_tbs").show();
		}else{
			$(".sportf_lightbox_tbs").hide();
		}
	})

	//Switch Game
	$.fn.GameSwitch = function(i){
		/*1*/
		$(".sportf_titles").text(game_ary[i]);
		/*2*/
		$(".sportf_tds").removeClass('on');
		$(".sportf_tds").eq(i).addClass('on');
		return;
		/*3*/
		$(".sportf_notearea").hide();
		$(".sport_result").hide();
		/*4*/
		$(".sportf_game").hide();
		$(".sprotf_main_game_area").each(function(j){
			$(this).find(".sportf_game").eq(i).show();
			$(this).find(".sportf_notearea").eq(i).show();
			$(this).find(".sport_result").eq(i).show();
		});
	};

	//Switch Result
	$(".sportf_li_left").each(function(i){
		return;//There is not using this function
		$(this).on('click',function(){
			if($(this).parent().next().find(".sportf_game_trend").css("display")=='none'){
				$(this).parent().next().find(".sportf_game_trend").show();
			}else{
				$(this).parent().next().find(".sportf_game_trend").hide();
			}
		});
	});

	//Select Game Buttom
	$(".sportf_bdn").each(function(){
		$(this).on('click',function(){
			if($(this).hasClass('sportf_down')){
				return;
			}
			if($(this).hasClass('on')){
				$(this).removeClass('on');
			}else{
				$(this).addClass('on');
			}
			$.fn.count_total_number();//Count Total Number
		})
	})


	//Click Menu Item
	$(".sportf_tds").each(function(i){
		//Switch Game
		$(this).on('click',function(){
			$.fn.GameSwitch(i);
		})
	})

	//Accordion Menu List
	$('.nivdr_subti').each(function(i){
		$(this).on('click',function(){
			if($(this).next().css('display')=='none'){
				$(this).next().show();
				$(".sportf_arw").eq(i).removeClass('sportf_rotate')
			}else{
				$(this).next().hide();
				$(".sportf_arw").eq(i).addClass('sportf_rotate')
			}
			
		});
	});

	//Clear All Select Type
	$(".lor_recycle").on('click',function(){
		$(".sportf_bdn, .sportf_ev, .sportf_detail_lightbox, .sportf_bd4_2_2, .sportf_showall").removeClass('on');
		$(".sportf_bd2").text('点此展开比分投注区');
		$(".sportf_bd2_val1, .sportf_bd2_val2, .sportf_bd2_val3, .sportf_mmn1, .sportf_mmn2, .sportf_mmn3, .sportf_mmn4").val('');
		$(".sporttery_f_totalNum").text('0');
		$(".sportf_bd2_2").text('点击投注');
		$(".sportf_bd2_2_val1").val('');
	});
});

//平分比 Lightbox
	$(function(){
		//Limit Word Length
		$.fn.limit_word_length = function(s,n){
	
			var m = s.length; 
			if(m > n){ 
				s = s.substring(0,n) + '...'; 
			} 
			return s;
		}
		//Game Content Switch
		$(".sportf_ev").each(function(i){
			$(this).on('click',function(){
				if($(this).hasClass('on')){
					$(this).removeClass('on');
				}else{
					$(this).addClass('on');
				}
					
			})
		});
		//Select All
		$(".sporttery_f_contents").each(function(i){
			var tg = $(this);
			tg.find('.sportf_evall').on('click',function(){
				if($(this).hasClass('on')){
					$(this).removeClass('on');
					tg.find('.sportf_ev').removeClass('on');
				}else{
					$(this).addClass('on');
					tg.find('.sportf_ev').addClass('on');
				}
			})
		})
		//Get Value
		$.fn.output_value = function(){
			var k = 0;
			var n = Array();
			n[0]= Array();
			n[1]= Array(Array(),Array(),Array());
			var ar = Array('胜其他','平其他','负其他');
			$(".sporttery_f_contents").each(function(i){
				$(this).find(".sportf_ev").each(function(j){
					if($(this).hasClass('on')){
						w = $(this).find('.sportf_data').text();
						if(w=='其他'){
							w = ar[i];
						}
						var b = n[1][i].length;
						n[1][i][b]=j;
						n[0][k]=w;
						k++;
					}
				})
			})
			return n;
		}
		//比分 Yes or No
		$(".sporttery_f_lc4 tr td").each(function(i){
			$(this).on('touchstart mousedown',function(){
				$(".sporttery_f_lc4 tr td").removeClass('on');
				$(this).addClass('on');
			});

			$(this).on('click',function(){
				if(i==1){
					//Get Value
					var m = parseInt($(".n").val());
					var ary = $.fn.output_value();
					var q = ary[0].join(',');
					var s =$.fn.limit_word_length(q,18);//Limit text length
					if(q==''){s='点此展开比分投注区'};
					$(".sportf_bd2").eq(m).text(s);

					var y = ary[1][0].join(',');
					var u = ary[1][1].join(',');
					var r = ary[1][2].join(',');
					$(".sportf_bd2_val1").eq(m).val(y);
					$(".sportf_bd2_val2").eq(m).val(u);
					$(".sportf_bd2_val3").eq(m).val(r);
					$.fn.count_total_number_room_two();//Count Total Number for room2
				}
				
				$(".sporttery_f_lc4 tr td").removeClass('on');
				$(this).removeClass('on');
				$(".sporttery_f_select_lightbox").hide();
			});
		})
		//全半場 Yes or No
		$(".sporttery_f_lc4_2 tr td").each(function(i){
			$(this).on('touchstart mousedown',function(){
				$(".sporttery_f_lc4_2 tr td").removeClass('on');
				$(this).addClass('on');
			});

			$(this).on('click',function(){
				if(i==1){
					//Get Value
					var m = parseInt($(".n").val());
					var ary = $.fn.output_value();
					var q = ary[0].join(',');
					var s =$.fn.limit_word_length(q,18);//Limit text length
					if(q==''){s='点击投注'};
					$(".sportf_bd2_2").eq(m).text(s);

					var y = ary[1][0].join(',');
					var u = ary[1][1].join(',');
					var r = ary[1][2].join(',');
					$(".sportf_bd2_2_val1").eq(m).val(y);
					$.fn.count_total_number_room_four();//Count Total Number for room4
				}
				
				$(".sporttery_f_lc4_2 tr td").removeClass('on');
				$(this).removeClass('on');
				$(".sporttery_f_select_lightbox").hide();
			});
		})
		//Menu Switch & Content Switch
		$(".sportf_darw").hide();

		$.fn.menu_to_contnet = function(i){
					//Switch Menu
					$(".sportf_darw").hide();
					$(".sportf_ee").removeClass('on');
					$(this).addClass('on');
					$(this).find('.sportf_darw').show();
					//Switch Content
					$(".sporttery_f_lc3").hide();
					$(".sporttery_f_lc3").eq(i).show();
		}
		
		$(".sportf_ee").each(function(i){
			$(this).on('click',function(){
				if($(this).hasClass('on')){

				}else{
					$(this).menu_to_contnet(i);
				}
					
			});
		});

		$(".sportf_ee").eq(0).click();

		//Number Match To Column
		$.fn.number_match_to_column = function(v,nbs,i){
			$(".sporttery_f_contents").eq(i).find('.sportf_ev').removeClass('on');
			$(".sportf_ee").eq(0).click();
			if(v.length>0 && v!=''){
				for(var b in v){
					$(".sporttery_f_contents").eq(i).find('.sportf_ev').eq(v[b]).addClass('on');
				}
			}
			
			for(var c in nbs){
				$(".sporttery_f_contents").eq(i).find('.sportf_nn').eq(c).text(nbs[c]);
			}
			$(".sportf_evall").removeClass('on');
		}



		//Select Number - Call Lightbox Dialog
		$(".sportf_game").each(function(i){

			var tg = $(this);
			//半全場
			tg.find('.sportf_bd2_2').on('click',function(){
				var a = $(".sportf_bd2_2_val1").eq(i).val().split(',');
				var nb = $(".sportf_bd2_2_number").eq(i).val().split(',');
				$.fn.number_match_to_column(a,nb,0);
				$(".sporttery_f_select_lightbox").show();
				$(".n").val(i);
			})// end 半全場
			//比分
			tg.find('.sportf_bd2').on('click',function(){
				var a1 = $(".sportf_bd2_val1").eq(i).val().split(',');
				var a2 = $(".sportf_bd2_val2").eq(i).val().split(',');
				var a3 = $(".sportf_bd2_val3").eq(i).val().split(',');
				var nb1 = $(".sportf_bd2_number1").eq(i).val().split(',');
				var nb2 = $(".sportf_bd2_number2").eq(i).val().split(',');
				var nb3 = $(".sportf_bd2_number3").eq(i).val().split(',');

				$.fn.number_match_to_column(a1,nb1,0);
				$.fn.number_match_to_column(a2,nb2,1);
				$.fn.number_match_to_column(a3,nb3,2);


				$(".sporttery_f_select_lightbox").show();
				$(".n").val(i);
			}); // end 比分
		});
	//混合過關
		//Get persont value 
		$.fn.refValTransfer = function(){
			var a = $(this).val();
			var b = a.split(',');
			return b;
		}
		//input persont value into lottery draw list
		$.fn.match_refvalue = function(a){
			for(var t in a){
				$(this).find('.sportf_detail_refnumb').eq(t).text(a[t]);
			}
		}
		//Put Select Val To Lightbox Table column
		$.fn.put_select_val_to_lightbox_column = function(a){
			$(this).find('.sportf_bd4_2_2').each(function(i){
				for(var c in a ){
					a[c] = parseInt(a[c]);
				}
				console.log(jQuery.inArray(i,a));
				if(jQuery.inArray(i,a)!==-1){
					$(this).addClass('on')					
				}
			})
		}
		
		$("#sporttery_b_room4 .sportf_game").each(function(i){
			var tg = $(this);
			$(this).find('.sportf_bd4').each(function(ui){
				
				//Click sporttery_f_room5 Draw List Btn
				$(this).on('click',function(){
					var y = Array();
					var yu = 0;
					var tu = '';
					tg.find('.sportf_bdn').each(function(ki){
						if($(this).hasClass('on')){
							y[yu] = ki;
							yu++;
						}
					});
					tu = y.join(',');
					tg.find('.sportf_mmn1').val(tu);
					$.fn.count_total_number_room_five();//Count Total Number for room5
				})
			})

			$(this).find('.sportf_detail_lightbox').on('click',function(){
				//Note Site
				$(".uh").val(i);
				$(".sprotf_detail_1").find(".sportf_bd4_2_2").removeClass("sportf_down");
				$(" #sporttery_b_room4 .sportf_game").eq(i).find('.sportf_bd4').each(function(ai){
					if($(this).hasClass("sportf_down")){
						$(".sprotf_detail_1").find(".sportf_bd4_2_2").eq(ai).addClass("sportf_down");
					}
				});
				var ntx = Array();
				refval1 = Array();
				refval2 = Array();
				refval3 = Array();
				refval4 = Array();
				var k = 0;

				//Get persont value 
				var refval1 = tg.find(".sportf_mmn_refnum1").refValTransfer();//Get persont value [1]
				var refval2 = tg.find(".sportf_mmn_refnum2").refValTransfer();//Get persont value [2]
				var refval3 = tg.find(".sportf_mmn_refnum3").refValTransfer();//Get persont value [3]
				
				tg.find('.sport_tbs .sportf_bdn').each(function(j){
					if($(this).hasClass('on')){
						ntx[k]=j;
						k++;
					};
				})
				
				
				//input persont value into lottery draw list
				$(".sprotf_detail_1").match_refvalue(refval1);
				$(".sprotf_detail_2").match_refvalue(refval2);
				$(".sprotf_detail_3").match_refvalue(refval3);
				$(".sprotf_detail_4").match_refvalue(refval4);
				

				//Put Select Val To Lightbox Table column
				var smmnv1 = $(".sportf_mmn1").eq(i).val().split(',');
				var smmnv2 = $(".sportf_mmn2").eq(i).val().split(',');
				var smmnv3 = $(".sportf_mmn3").eq(i).val().split(',');
				$(".sprotf_detail_1").find(".sportf_bd4_2_2").removeClass('on');
				$(".sprotf_detail_2").find(".sportf_bd4_2_2").removeClass('on');
				$(".sprotf_detail_3").find(".sportf_bd4_2_2").removeClass('on');
				$(".sprotf_detail_1").put_select_val_to_lightbox_column(smmnv1);
				$(".sprotf_detail_2").put_select_val_to_lightbox_column(smmnv2);
				$(".sprotf_detail_3").put_select_val_to_lightbox_column(smmnv3);
			})
		})// end 混合過關
		
	//Check and Close Lightbox
		$.fn.btn_with_on = function(){
			var a = Array();
			var b = 0;
			$(this).find('.sportf_bd4_2_2').each(function(i){
				if($(this).hasClass('on')){
					a[b] = i;
					b++;
				}
			});
			return a;
		}
		//Collect Lightbox Selected option
		$(".sportf_detail_checkbtn").on('click',function(){
			var spdary1 = $(".sprotf_detail_1").btn_with_on();
			var spdary2 = $(".sprotf_detail_2").btn_with_on();
			var spdary3 = $(".sprotf_detail_3").btn_with_on();
			var spdary4 = $(".sprotf_detail_4").btn_with_on();
			var ny = $(".uh").val();
			$(".sportf_mmn1").eq(ny).val(spdary1);
			$(".sportf_mmn2").eq(ny).val(spdary2);
			$(".sportf_mmn3").eq(ny).val(spdary3);
			$(".sportf_mmn4").eq(ny).val(spdary4);
			$("#sporttery_b_room4 .sportf_game .sport_tbs").eq(ny).find('.sportf_bdn').each(function(i){
				$(this).removeClass('on');
				if(jQuery.inArray(i, spdary1)!==-1){
					$(this).addClass('on');
				}
			});
			if(spdary2.length>0 || spdary3.length>0 ||  spdary4.length>0){
				$(".sportf_showall").eq(ny).addClass('on');
			}else{
				$(".sportf_showall").eq(ny).removeClass('on');
			}
			history.go(-1);
			$.fn.count_total_number_room_five();//Count Total Number for room5
		})


	});//$fn end



//Filter
$(function(){
	$(".sporttery_f_select_filter").hide();
	$(".sportf_backR1").on('click',function(){
		$(".sporttery_f_select_filter").show();
	});
	$(".sporttery_f_select_filter .cont1 tr td").each(function(i){
		//Click Filter Menu
		$(this).on('click',function(){
			
			if(i==0){ //All
				$(".cont2 .sportf_ev2").addClass('on');
			}
			if(i==1){ //Reverse
				$(".cont2 .sportf_ev2").each(function(){
					if($(this).hasClass('on')){
						$(this).removeClass('on');
					}else{
						$(this).addClass('on');
					}
				})
			}if(i==2){
				$(".cont2 .sportf_ev2").removeClass('on');
			}
		})
	});

	//Click Filter Game Option
	$(".sporttery_f_select_filter .cont2 .sportf_ev2").each(function(i){
		$(this).on('click',function(){
			if($(this).hasClass('on')){
				$(this).removeClass('on');
			}else{
				$(this).addClass('on');
			}
		})
	});

	//Close Filter
	$(".sporttery_f_select_filter .cont3 tr td").eq(0).on('click',function(){
		$(".sporttery_f_select_filter").hide();
	});
	$(".sporttery_f_select_filter .cont3 tr td").eq(1).on('click',function(){
		$(".sporttery_f_select_filter").hide();
	});
})