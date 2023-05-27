var swiper = new Swiper(".MySwiper", {
    slidesPerView: 4,
    centeredSlides:true,
    loop:true,
    spaceBetween: 100,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints : {
        991: {
            slidesPerView: 16
        }
    }

});