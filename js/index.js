$(document).ready(function () {
    const swiper = new Swiper(".sec1", {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerview: 0,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
            clickable: true,
        },
    });
    const swiper2 = new Swiper(".sec2", {
        slidesPerView: 6,
        spaceBetween: 10,
        slidesPerview: 0,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
            clickable: true,
        },
    });
    $(".side .top").click(function (e) { 
        $("html, body").stop().animate({
            scrollTop: 0
        },1000)
    });
});