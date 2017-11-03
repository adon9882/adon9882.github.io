$(function(){
		/*---------------------------
		calendar remind */
		$.fn.PersonalEvent = function(i,k,tg){
			var tgMain = tg[i];
			var tgSub = tgMain.t;
			var loboo = Array();
			var lobooN = Array();
			var n = 0;
			var GameAry = Array();
			for(var sca in tg[0].t){
				GameAry[sca] = tg[0].t[sca].x;
			}
			for(var m in tgSub){
				if($.inArray((k+1),tgSub[m].a)>=0){
					loboo[n]=GameAry[m];
					lobooN[n]=m;
					n++;
				}
			}
			
			
			if(lobooN.length >0 && !$(this).hasClass('y') && tgMain.r==1){
				$(".cal_note").stop().show().animate({opacity:1},100,function(){
					clearTimeout(note_timer);
					var note_timer = setTimeout(function(){
						$(".cal_note").animate({opacity:0},100,function(){
							$(".cal_note").css('opacity',0).hide();
						});
					},1600);

				});
				return;
			}else if(lobooN.length >0 && tgMain.r==1){
					$(".cal_note").css('opacity',0).hide();
					$(".cal_lightbox").show();
					k = k+1;
					$(".cal_selMenuDate").text(tgMain.y+"年"+tgMain.m+"月"+k+"號");
					$(".cal_selMenuInput").text('');
					for(var sk in lobooN){
						$(".cal_selMenuInput").append('<div><input type="checkbox" name="bb" data-role="none" value="'+lobooN[sk]+'"><span class="cal_rmword">'+loboo[sk]+'</span></div>');
					}
					$(".cal_selMenuInput").append("<input type='hidden' id='calY' name='calY' value='"+tgMain.y+"'><input type='hidden' id='calM' name='calM' value='"+tgMain.m+"'><input type='hidden' id='calD' name='calD' value='"+k+"'>");
					// console.log(i+','+k+','+tgMain.y+','+tgMain.m+loboo+lobooN);
			}
			
		}/*----------------------*/

	//Caculate Total day of Month
	$.fn.calGetDate = function(db){
		var tp = new Date(db.y,db.m,0);
		var td=tp.getDate();
		return td;
	}

	//Get the first day of week
	$.fn.calGetWeek = function(db){
		var tw = new Date(db.y,db.m-1,1);
		var n = tw.getDay();
		return n;
	}
	//Red Font Style
	$.fn.calRedType = function(j){
		if( j%7==0  || j%7==1){
			var c = 'red01';
		}else{
			var c = '';
		}
		return c;
	}
	//Create Thead
	$.fn.calGetThead = function(u){
		var tst = '';
		tst += "<thead><tr>";
		for(var n in u){
			var cs2 = $.fn.calRedType(parseInt(n)+1);
			tst += "<td class='cal_thead "+cs2+"'>"+u[n]+"</td>";
		}
		tst+="</tr></thead>";
		return tst;
	}

	//Create Tbody
	$.fn.calGetTbody = function(tg,d,w,k){
		var ss = 0;
		var aday = 42;
		var s = '　';
		var tbc = '';
		var cs = '';
		var cson = ''; //current day
		var csy = ''; //effective day
		var ly = parseInt(tg[k].y);
		var lm = parseInt(tg[k].m);
		var yy = tg[k].tday[0];
		var mm = tg[k].tday[1];
		var dd = tg[k].tday[2];
		
		tbc+="<tbody><tr>";
		for(var j = 1 ; j <= aday ; j ++){
			if(j>w && ss<d){
				ss++;
				var s = ss;
				var cs = "cal_tbody";
				var cs2 = $.fn.calRedType(j);

				//Ajust Current Day
				if(ly== yy && lm == mm && ss==dd){
					cson = "cal_tbody_on";
				}else{
					cson = "";
				}
				//Ajust Effective Day
				if(ly> yy){
					csy = 'y';
				}else if(ly == yy && lm > mm){
					csy = 'y';
				}else if(ly == yy && lm == mm && ss >= dd){
					csy = 'y';
				}else{
					csy = '';
				}
			}
			else{
				var s = '　';
				var cs = '';
				var cson = '';//current day
				var csy = ''; //effective day
				var cs2 = '';
			}

			tbc+="<td class='cal_col "+cs+" "+cs2+" "+cson+" "+csy+"'>"+s+"</td>";
 			if(j%7==0 && j !=aday){
 				tbc+="</td></tr>";
 			}
		}
		tbc+="</tr></tbody>";
		return tbc;
	}

	//Create Calendar DOM
	$.fn.calcreateDOM = function(tg,u){
		//Parameter 
		var c = '';
		
		//Start create Calendar
		for(var k=0; k< tg.length; k++){
			//Get total date num of month and first week
			var d1 = $.fn.calGetDate(tg[k]);
			var w1 = $.fn.calGetWeek(tg[k]);
			//Create DOM

			c += "<div class='cal_Mainarea' >";
			//<!--Table-->
			c+="<table class='cal_table'>";
			c += $(this).calGetThead(u);
			c += $(this).calGetTbody(tg,d1,w1,k);
			c += "</table>";//<!--/Table-->
			c += "</div>";
		}
		return c;
		
		
	}

	//Insert Event DOM
	$.fn.InsertEventDOM = function(c1,c2,x,a,i,k){
		var f = '';
		var allDB = Array();

		var kk = $(".cal_Mainarea").eq(k);
		f+="<div class='"+c1+"'>";
		for(var d in a){
		    f+="<span class='"+c2+"'>"+x+"</span>";
		}
		f+="</div>";
		kk.prepend(f);	
		$(".cal_Mainarea").css({'position':'relative'});
		
	}

	//Fix Position
	$.fn.FixPosition = function(c1,c2,c3,x,a,i,k){
		var kk = $(".cal_Mainarea").eq(k);
		var ajw = kk.find(".cal_tbody").eq(0).outerWidth();
		
		//setting Event DOM style
		$("."+c2).css({'position':'absolute','background':c3,'width':ajw,'textAlign':'center','padding':'0.1em 0;'});

		//Append Event DOM
		for(var d in a){
			var e = parseInt(a[d]);
			e=e-1;
			var ctbodye = kk.find(".cal_tbody").eq(e);
			var ctnumv = ctbodye.find('.siteNote');
			if(ctbodye.text()!=''){
				//if isset Event in some Position
				var adp = 0;
				if(typeof ctnumv.val()!='undefined'){
					var l = ctnumv.val();
					adp = kk.find("."+c2).eq(d).outerHeight()*l;
					l++;
					ctnumv.val(l);
				}else{
					ctbodye.append("<input class='siteNote' type='hidden' value=1 />");
				}
				//If Event bigger then 2
				if(ctnumv.val()>2){
					// kk.find("."+c2).eq(d).hide();
				}

				var adi = ctbodye.height()/3.5;

				var cbp = ctbodye.position();
				var nt = cbp.top+adp+adi;
				var nl = cbp.left;
			    kk.find("."+c2).eq(d).css({top: nt+"px",left: nl+"px"});
			}
		}
	}



	//Add Game Event
	$.fn.AddGameEvent = function(tg){
		for(var k=0; k< tg.length; k++){
			var v = tg[k].t;
			for(i=0; i< v.length; i++){
				$(this).InsertEventDOM(v[i].c1,v[i].c2,v[i].x,v[i].a,i,k);
				$(this).FixPosition(v[i].c1,v[i].c2,v[i].c3,v[i].x,v[i].a,i,k);
			}
		}
	}

	//Creat Cycle loop
	$.fn.CycleCalendar = function(tg){
		$(this).cycle({
		    fx					:  'scrollHorz', 
		    sync				:  true,
		    speed				:  'slow', 
		    timeout				:  0, 
		    next				:  '.cal_r_btn', 
		    prev				:  '.cal_l_btn',
		    startingSlide		:  1,
		    cssBefore			:  {opacity: 0},
		    animIn				:  {opacity: 1}, 
		    animOut				:  {opacity: 0},
		    pagerAnchorBuilder	: function(idx, slide) { 
				var ww = $(window).width()-1;
				$(".cal_table, .cal_calendar").width(ww+"px");		
		    },after: function (curr, next, opts) {
				var index = opts.currSlide;
				$(".cal_maindate").text(tg[index].y+'年'+tg[index].m+'月');
			}
		});
	}

	//Hover effect
	$.fn.ClickDateEvent = function(tg){
			$(".cal_Mainarea").each(function(i){
				$(this).find(".cal_tbody").each(function(k){
					$(this).bind('touchstart click', function(){
						$(this).PersonalEvent(i,k,tg);
					});
					$(this).on('touchstart ',function(){
						$(this).css({background:"rgba(0, 0, 0, 0.21)"});
					}).on('touchmove touchend ',function(){
						if(!$(this).hasClass('cal_tbody_on')){
							$(this).css({background:"transparent"});
						}
						
					});
					
				});
		});
	};
	$.fn.NoteBox = function(tg){
		var nmm = tg[0].tday[1];
		var ndd = tg[0].tday[2];
		var ntx = "<div class='cal_note'><span class='cal_note_box'>今天是<span class='cal_note_month'>"+nmm+"</span>月<span class='cal_note_date'>"+ndd+"</span>号，该彩期已不能设置提醒!</span></div>";
		$(this).after(ntx);
	}

	$.fn.calDetect = function(tg){
		var This_ = $(this);
		This_.text('');
		var u = Array('周日','周一','周二','周三','周四','周五','周六');
		//Create Note DOM
		This_.NoteBox(tg);
		//Create Calendar DOM
		var ctall = This_.calcreateDOM(tg,u);
		//Append DOM
		This_.append(ctall);
		//Add Game Event
		This_.AddGameEvent(tg);
		This_.CycleCalendar(tg);
		This_.ClickDateEvent(tg);
		// $(window).resize(_.debounce(function(){
		//    This_.calDetect(tg);
		// }, 1000));

		
	}
})
