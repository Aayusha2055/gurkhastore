$(document).ready(function () {
    $('.dropdown-icon-s').click(function () {
        $('.dropdown-icon-s').hide();
        $('.sub-menu-1').show("slow");
        $('.dropdown-icon-close-s').show();
    });
    $('.dropdown-icon-close-s').click(function () {
        $('.dropdown-icon-close-s').hide();
        $('.sub-menu-1').hide("toggle");
        $('.dropdown-icon-s').show();
    });
    $('.dropdown-icon-c').click(function () {
        $('.dropdown-icon-c').hide();
        $('.sub-menu-2').show("slow");
        $('.dropdown-icon-close-c').show();
    });
    $('.dropdown-icon-close-c').click(function () {
        $('.sub-menu-2').hide("toggle");
        $('.dropdown-icon-close-c').hide();
        $('.dropdown-icon-c').show();
    });
    $('.dropdown-icon-a').click(function () {
        $('.sub-menu-3').show("slow");
        $('.dropdown-icon-a').hide();
        $('.dropdown-icon-close-a').show();
    });
    $('.dropdown-icon-close-a').click(function () {
        $('.sub-menu-3').hide("toggle");
        $('.dropdown-icon-close-a').hide();
        $('.dropdown-icon-a').show();
    });

    // $('#toggle-search').on('click', function () {
    //     $('#searchBar').toggle('display: inline-block');
    // });

});
$(document).ready(function () {
    // $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 1024) {
            // $('div').removeClass('col-sm-10');
            $('.col-sm-12').removeClass("position-absolute").addClass("position-fixed");
            $("nav").removeClass("bg-light").addClass("bg-dark");
        }
    // });
});





