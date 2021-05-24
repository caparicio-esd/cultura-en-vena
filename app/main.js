import '../assets/sass/main.scss'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


window.addEventListener('load', () => {
    initEventsInSidebar();
    initAllSwiper();
})

const initEventsInSidebar = () => {
    const sideItems = document.querySelectorAll('.menu_item');
    sideItems.forEach(i => {
        i.addEventListener('click', (ev) => {
            sideItems.forEach(i_ => {
                if (!ev.composedPath().includes(i)) {
                    i_.classList.remove('opened');
                }
            })
            if (i.querySelector('.submenu')) {
                i.classList.toggle('opened');
            }
        })
    })
}


const initAllSwiper = () => {
    const sectionsSwiper = document.querySelectorAll('.section_swiper');
    sectionsSwiper.forEach(ss => {
        const swiperContainer = ss.querySelector('.swiper-container');
        const swiper = new Swiper(swiperContainer, {
            direction: 'horizontal',
            loop: true,
            simulateTouch: false,
            pagination: {
                el: ss.querySelector('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: ss.querySelector('.swiper-button-next'),
                prevEl: ss.querySelector('.swiper-button-prev'),
            },

            //con el teclado

            keyboard: {
                enabled: true,
            },

            
        });
    })
}