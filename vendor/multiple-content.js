$(document).ready(function () {
    $('.toggle-filter-hide').click(function () {
        $('.side-nav').hide();
        $('.toggle-filter-hide').hide();
        $('.toggle-filter-show').show();
        $('.main-menu').removeClass('col-sm-10');
        $('.main-menu').addClass('col-sm-12');
    });
    $('.toggle-filter-show').click(function () {
        $('.side-nav').show();
        $('.toggle-filter-show').hide();
        $('.toggle-filter-hide').show();
        $('.main-menu').removeClass('col-sm-12');
        $('.main-menu').addClass('col-sm-10');
    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            loop:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false,
                    dots:true
                }
            }
        });
    });

    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true
    //             },
    //         600: {
    //             items: 3,
    //             nav: false
    //             },
    //         1000: {
    //             items: 3,
    //             nav: true,
    //             loop: false
    //         }
    //     }
    // });
});