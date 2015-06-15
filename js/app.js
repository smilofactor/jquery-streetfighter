$(function() {
	$(".ryu-still")
	.mouseover(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();

		$(".ryu-ready")
		.mousedown(function() {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").show();

			$(".ryu-throwing")
			.mouseup(function() {
				$(".ryu-throwing").hide();
				//$(".ryu-ready").hide();
				$(".ryu-still").show();

			});
		});
	});

    $(".ryu-ready")
    .mouseleave(function() {
    	$(".ryu-ready").hide();
    	$(".ryu-still").show();
    });

});