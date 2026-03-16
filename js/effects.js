$(document).ready(function(){

//  Menu Effect

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

// Header Effect

    if ( $(window).width() > 800) {
        $('header .texts').css({
            opacity: 0,
            margingTop: 0
        });

        $('header .texts').animate({
            opacity: 1,
            margingTop: '50px'
        }, 2500);
    }

// Menu Effect

    var about = $('#about').offset().top,
        services = $('#services').offset().top,
        gallery = $('#gallery').offset().top,
        reviews = $('#reviews').offset().top,
        contact = $('#contact').offset().top

    $('#btn-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about - 250
        }, 500);
    });
    $('#btn-services').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: services + 450
        }, 500);
    });
    $('#btn-gallery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: gallery
        }, 500);
    });
    $('#btn-reviews').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: reviews
        }, 500);
    });
    $('#btn-contact').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact
        }, 500);
    });

});

