$.mobile.page.prototype.options.domCache = true;

$(window).load(function() {
      $('.flexslider').flexslider({
        animation: "slide", 
        start: function(){
        },
        init: function() {
        } 
      });
      //Index's lightbox
      $(".call_lightbox").on('click',function(){
            $(".lightbox_vd").fadeIn();
            $.mobile.loading('hide');
      });
      $(".lightbox_vd").on('click',function(){
        $(this).hide();
        setTimeout(function(){$.mobile.loading('hide');},600);
        
      })
});
$(window).load(function() {
	var old_v = 145;
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;;
	var data = $.getJSON('http://www.astrocorp.com.tw/api.php');
    data.success(function( msg ) {
        if(msg[0]['version']!=old_v){
			if(confirm("侦测到新版本，是否更新？")){
			  window.plugins.ChildBrowser.openExternal('https://build.phonegap.com/apps/852938/install/?qr_key=FzYq5r4GBiJbBeKEMXL3');
			}
			else{
			  return;
			}
        }
    });

});




