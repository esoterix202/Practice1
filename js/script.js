$(document).ready(function () {

    let listLevel1 = $('sidebar-cascade__level1>li>a');

    listLevel1.click(function () {
        $('sidebar-cascade__level2').slideToggle();
    });

    $('.slider').slick({
        arrows: true,
        speed: 1200
    });
});