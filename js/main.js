var clSmoothScroll = function() {

    var cfg = {
        scrollDuration : 800, // smoothscroll duration
    }

    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
        $target    = $(target);

            e.preventDefault();
            e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });

};


var clPreloader = function() {

    $("html").addClass('cl-preload');

    $(window).on('load', function() {

        //force page scroll position to top at page refresh
        // $('html, body').animate({ scrollTop: 0 }, 'normal');

        // will first fade out the loading animation
        $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });

        // for hero content animations
        $("html").removeClass('cl-preload');
        $("html").addClass('cl-loaded');

    });
};

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$('.navbar-brand').css('color','white');
$('.nav-link').css('color','white');

$(window).scroll(function () {

        if ($(window).scrollTop() >= 200) {
            $('.navbar').css('background-color','rgb(255,255,255)');
            $('.navbar').css('box-shadow','0 8px 6px -6px #999');
            $('.navbar-brand').css('color','black');
            $('.nav-link').css('color','black');
            $('')
            }
            else {
            $('.navbar').css('background-color','transparent');
            $('.navbar').css('box-shadow','0 0px 0px 0px');
            $('.navbar-brand').css('color','white');
            $('.nav-link').css('color','white');
            }
    });


clSmoothScroll();
clPreloader();