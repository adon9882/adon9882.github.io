$(function(){
	//when hover to the ball, big ball flag will show
	$.fn.ballshow = function(a){
		var king = $(this).find(a.bba);

		 var b="."+a.t2;

		king.find(a.or).each(function(i){
			king.find(a.t1).append('<span class="'+a.t2+'">'+$(this).text()+'</span>');

			var offset_obj = $(this).offset();

			var off_x = offset_obj.left;

			var off_y = offset_obj.top;

			var ccc = off_x - king.find(b).eq(i).outerWidth()/2 + $(this).width()/2;

			var ddd = off_y - king.find(b).eq(i).outerHeight();

			king.find(b).eq(i).offset({top:ddd,left:ccc});

			$(this).unbind( "mousedown");

			$(this).unbind( "mouseup");

			$(this).unbind( "touchstart");

			$(this).unbind( "touchmove");

			$(this).unbind( "touchend");

			$(this).on( "mousedown", function() {
				king.find(b).eq(i).show();

			  }).on( "mouseup", function() {
			    king.find(b).hide();

			  });

			$(this).on( "touchstart", function() {
				king.find(b).eq(i).show();

			  }).on( "touchmove", function() {
			    king.find(b).hide();

			  }).on( "touchend", function() {
			    king.find(b).hide();

			  });

		});

	}
	//algorithm
	$.fn.bitrAlgorithm = function(start,end,num){
		var m = Array();
	    var n = Array();
    	var o = 0;
    	for(var s=start;
    		s<=end;
    	s++){
    		n[o] = s;
    		o++;
    	}
		var p = n.length;
		while (p) {
		    var q = parseInt(Math.random() * p);
		    var o = n[--p];
		    n[p] = n[q];
		    n[q] = o;
		}
		for(var q=0;
			q<num;
		q++){
			m[q] = n[q];
		}
		return m;
	}
	//Select Random Ball 
	$.fn.bitrAlgExt = function(start,end,num){
		var uu = Array();
	    var n = Array();
    	var o = 0;
    	var um = num;
		uu = um.length;
		jj =Math.floor((Math.random()*uu)+1)-1;
		kk = um[jj];
		m = $.fn.bitrAlgorithm(start,end, kk.b);
		m.sort(function(a,b){return a-b});
		m = Array(m,kk.a);
		return m;
	}
	//select ball - add and delete
	$.fn.balllist = function(a){
		var king = $(this).find(a.bba);

		king.find(a.or).each(function(i){
			$(this).unbind('click');

			$(this).on('click',function() { //red ball click
				var ll = king.find("."+a.ontype).length;
				if($(this).hasClass(a.ontype)){
			  		var imgs = 'images/b01/ball_gray.png';
			  		$( this ).removeClass( a.ontype ).css({'background-image': 'url(' + imgs + ')',color:'black'});
			  		king.find("."+a.txts).text(ll-1);
			  	}else{
					if(ll>=a.allb){
						//限制球數提示function描述
						//alert('球數過量');
						return;
					}
					king.find("."+a.txts).text(ll+1);
			  		$( this ).addClass( a.ontype ).css({'background-image':'url(' + a.img+ ')',color:'white'});
			  	};

			});

		});

	}

	//clear all ball selected
	$.fn.clearall = function(em){
		var king = $(this).find(em.bba);

		king.find(em.c2).text(0);

		var imageUrl = "images/b01/ball_gray.png";
		
		king.find(em.c3).each(function(i){
			
			$( this ).removeClass( em.c1 ).css({'background-image': 'url(' + imageUrl + ')',color:'black'});

		});

	}
	// fast random select ball and show
	//limit_reds,limit_redl,".redfastsel1",".lro_redsel",".lro_redballtd","lor_red_on","images/b01/ball_red.png"
	$.fn.fastrandsel = function(start,end,tg,ar,bo,cn,im,or,bba){
		var king = $(this).find(bba);
		var kingg = $(this);
		king.find(or).unbind('click');

		king.find(or).on('click',function(){
			kingg.clearall({c1:cn,c2:ar,c3:bo,bba:bba});

			var num = king.find(tg).val();

			var g = Array();

			var g = $.fn.bitrAlgorithm(start,end,num);

			for(var b=0;
				b<g.length;
			b++){
				var c = g[b]-1;

				king.find(bo).eq(c).addClass( cn ).css({'background-image':'url(' + im + ')',color:'white'});

			}
			king.find(ar).text(num);

		});

		king.find(tg).change(function(){
			kingg.clearall({c1:cn,c2:ar,c3:bo,bba:bba});

			var num = king.find(tg).val();

			var g = Array();

			var g = $.fn.bitrAlgorithm(start,end,num);

			for(var b=0;
				b<g.length;
			b++){
				var c = g[b]-1;

				king.find(bo).eq(c).addClass( cn ).css({'background-image':'url(' + im + ')',color:'white'});

			}
			king.find(ar).text(num);

		})
	}
	//init treatment
	$.fn.initsel = function(g,tg,ar,bo,cn,im,or,fng,bba){
		var king = $(this).find(bba);

		var num = king.find(tg).val();

		
		for(var b=0;b<g.length;b++){
			var c = g[b]-1;

			king.find(bo).eq(c).addClass( cn ).css({'background-image':'url(' + im + ')',color:'white'});

		}
		king.find(ar).text(g.length);
		
		$(this).find(bba).find(fng).text('');

	}
	//str_pad - Adding extra zeros in front of a number
	/*
		g: is a number array
		a: is the element for padding
		c: is string length
		ex: 
			$.fn.strPad(Array(1,12,3),'0',2);

			will return :
				Array('01','12','03');

	
	*/
	$.fn.strPad = function(g,a,b){
		for(var d = 0 ;
		 d< g.length;
		 d++){
			g[d] = ( a + g[d] ).substr( -b );

		}
		return g;

	}
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

	}
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
})

//------------All Fn used

$.fn.LottoryRoomX = function(pageId,bba,color,ballary){

	pageId.clearall({c1:"lor_"+color+"_on",c2:".lro_"+color+"sel",c3:".lro_"+color+"balltd",bba:bba});

	pageId.initsel(ballary,"."+color+"fastsel1",".lro_"+color+"sel",".lro_"+color+"balltd","lor_"+color+"_on","images/b01/ball_"+color+".png","."+color+"fastsel2",".lro_"+color+"ball",bba);

}

$.fn.LottoryRoomZ = function(pageId,bba,color,limit_ball,limit_s,limit_l){
	//select ball - add and delete
	pageId.balllist({ontype:"lor_"+color+"_on",txts:"lro_"+color+"sel",img:"images/b01/ball_"+color+".png",allb:limit_ball,or:".lro_"+color+"balltd",bba:bba});
	//when hover to the ball, big ball flag will show
	pageId.ballshow({t1:".lro_"+color+"ball",t2:"lro_show_"+color+"",or:".lro_"+color+"balltd",bba:bba});
	// fast random select ball and show
	pageId.fastrandsel(limit_s,limit_l,"."+color+"fastsel1",".lro_"+color+"sel",".lro_"+color+"balltd","lor_"+color+"_on","images/b01/ball_"+color+".png","."+color+"fastsel2",bba);
	// clear all selected
	pageId.find(".lor_recycle").click(function(){
		pageId.clearall({c1:"lor_"+color+"_on",c2:".lro_"+color+"sel",c3:".lro_"+color+"balltd",bba:bba});
	})
}
