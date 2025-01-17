$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('fixed-header');
        } else {
            $('header').removeClass('fixed-header');
        }
    });
});
