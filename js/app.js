$(document).ready(function() {
	$(".ryu-game")
	.mouseenter(function() {
		$(".ryu-still").hide().
        mouseleave(function() {
            $(this).show();
        })
		$(".ryu-ready").show().
        mouseleave(function() {
            $(this).hide();
        })
    })
    .mouseleave(function() {
    	$(".ryu-ready").hide();
    	$(".ryu-still").show();
    })
    .mousedown(function() {
        $(".ryu-still").hide()
        .mouseleave(function() {
            $(this).show();
        })
        $(".ryu-throwing").show()
        .mouseleave(function() {
            $(this).hide();
        })
        $(".hadouken").finish().show()
        .animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            }
            );

    })
    .mouseup(function() {
        $(".ryu-still").show();
        $(".ryu-throwing").hide();
    })
});
