$(document).ready(function() {
	$('.ryu-game').mouseenter(function() {
        $('.ryu-image').hide();
        $('.ryu-ready').show();
    }).mouseleave(function() {
        $('.ryu-image').hide();
        $('.ryu-still').show();
    }).mousedown(function() {
        playHadouken();
        $('.ryu-image').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            });
    }).mouseup(function() {
            $('.ryu-image').hide();
            $('.ryu-ready').show();
    });
    
    $(document).keydown(function(ekskey) {
        if (ekskey.which == '88') {
            $('.ryu-image').hide();
            $('.ryu-cool').show();
            }
        }).keyup(function() {
            $('.ryu-image').hide();
            $('.ryu-still').show();

        });
    });


function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
