$(function(){
	$.fn.calendarCreate = function(s){
		$( this ).datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: 'yy-mm-dd',
			maxDate: new Date(),
			minDate: "-3m",
			showOn: "button",
			buttonImage: s,
			buttonImageOnly: true
		});
	}
	$("#datepicker").calendarCreate("images/a01/icon_calendar.png");
})
