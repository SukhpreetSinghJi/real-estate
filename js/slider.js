const swiper = new Swiper('.heroslider', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay:{
        delay: 2000,
        disableOnInnteraction: false
    },
    effect: 'fade',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    }
})