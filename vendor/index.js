
$(document).ready(function () {
        $("#offer-modal").modal('show');
});

$('.side-menu').hide();

$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
                0: {
                        items: 1,
                        nav: true
                },
                600: {
                        items: 3,
                        nav: false
                },
                1000: {
                        items: 5,
                        nav: true,
                        loop: false
                }
        }
});

$(".owl-carousel div img").click(function(){
        var $src = $(this).attr('src');
        $('#viewImageOnClick').attr("src",$src);
});

$(document).ready(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 1024) {;
                $('span').removeClass("display-1").addClass("display-5");
                $('.main-img-card').removeClass("position-relative");
                $("nav").removeClass("bg-light").addClass("bg-dark");
                // $('.new-arrivals').addClass("")
                // $('.main-img-card:last').prependTo('.main-img-content');
                $('.main-img-content').addClass("position-absolute").css("top","0");
                $('.main-img-card').addClass("position-absolute").css("top","10rem");
                $('.item-details').removeClass('pt-5');
            }
    });



