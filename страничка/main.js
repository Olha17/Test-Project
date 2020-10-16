$(document).ready(function() {
    $('#mobile-nav .parent').append('<i class="fas fa-plus open-menu hide-on-big"></i>');

    $('#mobile-nav > ul').wrap('<div class="overflow"></div>');
    $(window).on('load resize', function() {
        var vph = $(window).height() - 57; 
        $('.overflow').css('max-height', vph);
    });

    var menu = $('.overflow > ul');
    var bg = $('html, body');

    function bgScrolling() {
        if (menu.hasClass('open')) {
            bg.css({
                'overflow-y': 'hidden',
                'height': 'auto'
            });
        } else {
            bg.css({
                'overflow-y': 'visible',
                'height': '100%'
            });
        }
    }

    $('.menu-button').on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(250);
        menu.toggleClass('open');
        $(this).children().toggleClass('far fa-times-circle hide-on-big');
        bgScrolling();
    });

    $('.open-menu').on('click', function(e) {
        e.preventDefault();
        $(this).prev('ul').slideToggle(250);
        $(this).toggleClass('rotate');
    });
});