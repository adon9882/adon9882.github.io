$(function(){
	$('.A_btn , .cotb').click(function(){
		$.mobile.loading('show');
	})
});
$(window).load(function(){
	setTimeout(function(){
		$.mobile.loading('hide');
	},1000);
	
})



