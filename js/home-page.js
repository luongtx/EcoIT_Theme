$(function() {
	$(".fa-chevron-left").click(function(event) {
		/* Act on the event */
		$(".slide1").toggleClass('phai');
		$(".slide1").removeClass('_2phai');
		$(".slide2").toggleClass('trai');
		$(".slide1").removeClass('_2trai');
	});
	$(".fa-chevron-right").click(function(event) {
		/* Act on the event */
		$(".slide1").toggleClass('_2trai');
		$(".slide1").removeClass('trai');
		$(".slide2").toggleClass('_2phai');
		$(".slide2").toggleClass('phai');
	});
});