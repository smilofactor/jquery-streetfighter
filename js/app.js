$(function() {
	$(".ryu-still")
	.mouseover(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});

    $(".ryu-ready")
    .mouseleave(function() {
    	$(".ryu-ready").hide();
    	$(".ryu-still").show();
    });

});