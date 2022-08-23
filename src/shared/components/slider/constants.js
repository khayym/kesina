export const sliderBreakpoints = {
    300: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        grabCursor: true,
        // centeredSlides: true,
        scrollbar: {
            draggable: true,
            enabled: true,
            dragSize: 100,
            horizontalClass: 'swiper-scrollbar-horizontal',
        }
    },
    400: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        grabCursor: true,
        centeredSlides: false,
        scrollbar: {
            draggable: true,
            enabled: true,
            dragSize: 100,
            horizontalClass: 'swiper-scrollbar-horizontal',
        }
    },
    640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: false,
        scrollbar: {
            draggable: true,
            enabled: true,
            dragSize: 100,
            horizontalClass: 'swiper-scrollbar-horizontal',
        }
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grabCursor: false,
        centeredSlides: false,
        scrollbar: {
            draggable: true,
            dragSize: 288,
            enabled: true,
            horizontalClass: 'swiper-scrollbar-horizontal',
        }
    },
    1000: {
        slidesPerView: 2.5,
        spaceBetween: 40,
        centeredSlides: false,
        scrollbar: {
            draggable: true,
            dragSize: 288,
            enabled: true,
            horizontalClass: 'swiper-scrollbar-horizontal',
        }
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: false,
        scrollbar: {
            enabled: false,
            horizontalClass: 'swiper-scrollbar-horizontal',
        }
    }
}