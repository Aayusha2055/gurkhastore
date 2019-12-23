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

    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('.main-menu').addClass('fixed');
        }
        else {
            $('.main-menu').removeClass('fixed');
        }
    });

    $('.card-img-overlay').mouseover(function (event) {
        $(this).find('button').show();
        $(this).css("background-color","black");
        $(this).css("opacity","0.3");
    });    

    $('.card-img-overlay').mouseout(function (event) {
        $(this).find('button').hide();
        $(this).css("background-color","none");
        $(this).css("opacity","0");
    });
});