$(document).ready(function() {
	$('.ryu-game').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    }).mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
    }).mousedown(function() {
        playHadouken();
        $('.ryu-throwing').show();
        $('.ryu-ready').hide();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function() {
                $(this).hide();
                $(this).css('left', '520px');
            });
    }).mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
    });
    
    $(document).keydown(function(ekskey) {
        if (ekskey.which == '88') {
            $('.ryu-image').hide();
            $('.ryu-cool').show();
            }
        }).keyup(function() {
            $('.ryu-still').show();
            $('.ryu-cool').hide();

        });
    });


function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
