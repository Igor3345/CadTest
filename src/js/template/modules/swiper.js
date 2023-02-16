export const swiper = async () => {

    const {
        Swiper,
        Autoplay,
        Pagination,
        Navigation,
    } = await

            import( /* webpackChunkName: "swiper" */ 'swiper');

    Swiper.use([Navigation, Pagination, Autoplay]);

    const body = document.querySelector('body');

    const optionSwiper = document.querySelector('.js-option_swiper');

    const personalSwiper = document.querySelector('.js-personal_swiper');

    const valueSwiper = document.querySelector('.js-values_slider');

    const historySwiper = document.querySelector('.js-history_slider ');

    const vacansionSwiper = document.querySelector('.js-modal_swiper_vacansion')

    if (optionSwiper) {
        let option_slider = new Swiper(optionSwiper, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: ".js-option_pagination ",
                type: 'bullets',
                clickable: true,
            },

        })
    };
    if (personalSwiper) {
        let person_slider = new Swiper(personalSwiper, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: ".js-person_pagination",
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.js-personal_buttons .swiper-button-next',
                prevEl: '.js-personal_buttons .swiper-button-prev',
            },
        })
    };

    if (valueSwiper) {
        let value_slider = new Swiper(valueSwiper, {
            direction: 'horizontal',
            loop: false,
            spaceBetween: 32,
            slidesPerView: 3,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: ".js-value_pagination",
                type: 'bullets',
                clickable: true,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 1.5
                },
                320: {
                    slidesPerView: 1
                }
            },

        })
    };
    if (historySwiper) {
        let history_slider = new Swiper(historySwiper, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: ".js-history_pagination",
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.js-history_buttons .swiper-button-next',
                prevEl: '.js-history_buttons .swiper-button-prev',
            },
        })
    };

    if (vacansionSwiper) {

        let vacansion_slider = new Swiper(vacansionSwiper, {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 30,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            navigation: {
                nextEl: '.js-modal_slider .swiper-button-next',
                prevEl: '.js-modal_slider .swiper-button-prev',
            },
        })
    }

}


