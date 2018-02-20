$(document).ready(function () {
    $(window).load(function () {
        $('.flexslider').flexslider();
    });

    var $container = $('#isotope-gallery-container');
    var $filter = $('.filter');
    $(window).load(function () {
        // Initialize Isotope
        $container.isotope({
            itemSelector: '.gallery-item-wrapper'
        });
        $('.filter a').click(function () {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });
        $filter.find('a').click(function () {
            var selector = $(this).attr('data-filter');
            $filter.find('a').parent().removeClass('active');
            $(this).parent().addClass('active');
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    $(window).smartresize(function () {
        $container.isotope('reLayout');
    });
    // End Isotope Filtering
    $('.gallery-zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true,
        },
        //        zoom: {
        //			enabled: true,
        //			duration: 300 // don't foget to change the duration also in CSS
        //		}
        // other options
    });

    $(window).load(function () {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    });

})
