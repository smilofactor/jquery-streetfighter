$(function() {
	$(".ryu-still")
	.mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
    })
    .mouseleave(function() {
    	$(".ryu-ready").hide();
    	$(".ryu-still").show();
    })
    .mousedown(function() {
        $(".ryu-still").hide();
        $(".ryu-throwing").show();

    })
});



        /*
		$(".ryu-ready")
		.mousedown(function() {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").show();

			$(".ryu-throwing")
			.mouseup(function() {
				$(".ryu-throwing").hide();
				$(".ryu-ready").hide();
				$(".ryu-still").show();

			});
		});
	});
    */

