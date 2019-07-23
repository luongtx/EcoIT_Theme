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

$(window).scroll(function(){
	var cur_width = parseInt($("body").css("width"));
	if($(document).scrollTop()>50){
		$("#brandimg").addClass("scrolledbrand");
		$(".navbar-nav").addClass("scrollednav");
		if(cur_width > 767) $(".collapse").css({"height":30});
		else $(".collapse").css({"height":350});
	}
	else{
		$("#brandimg").removeClass("scrolledbrand");
		$(".navbar-nav").removeClass("scrollednav");
		if(cur_width > 767) $(".collapse").css({"height":120});
		else $(".collapse").css({"height":350});
	}
});