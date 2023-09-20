$(document).ready(function() {

    $('.hiphop__slider').slick({
        nextArrow:'<button type="button" class="hiphop slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="hiphop slick-btn slick-prev"></button>',
        slidesToShow: 2,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 1800,
        pauseOnHover: false,
        centerMode: true,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });

    $('.highhills__slider').slick({
        nextArrow:'<button type="button" class="highhills slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="highhills slick-btn slick-prev"></button>',
        slidesToShow: 2,
        slidesToScroll:2,
        autoplay: true,
        autoplaySpeed: 1800,
        pauseOnHover: false,
        centerMode: true,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });

    $('.dancehall__slider').slick({
        nextArrow:'<button type="button" class="dancehall slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="dancehall slick-btn slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        dots: true,
        pauseOnHover: false,
        centerMode: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });

    $('.jazzfunk__slider').slick({
        nextArrow:'<button type="button" class="jazzfunk slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="jazzfunk slick-btn slick-prev"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        dots: true,
        pauseOnHover: false,
        centerMode: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });

});

const tabDancehall = document.querySelector('.tabs__item-1');
const tabHighheels = document.querySelector('.tabs__item-2');
const tabHiphop = document.querySelector('.tabs__item-3');
const tabJazzfunk = document.querySelector('.tabs__item-4');
const tabContemporary = document.querySelector('.tabs__item-5');
const tabExperimental = document.querySelector('.tabs__item-6');

const hideContentHiphop = document.querySelector('.hiphop');
const hideContentHighheels = document.querySelector('.highhills');
const hideContentDancehall = document.querySelector('.dancehall');
const hideContentJazzfunk = document.querySelector('.jazzfunk');
const hideContentContemporary = document.querySelector('.contemporary');
const hideContentExperimental = document.querySelector('.experimental');

let clicked = null;

function showHideContent() {
    tabHiphop.addEventListener('click', () => {
        // hideContentHiphop.style.display = 'block';
        if (clicked === null) {
            hideContentHiphop.classList.remove('hide-obj');
            clicked = hideContentHiphop;
        } else {
            clicked.classList.add('hide-obj');
            clicked = hideContentHiphop;
            hideContentHiphop.classList.remove('hide-obj');
        }
    })

    tabHighheels.addEventListener('click', () => {
        if (clicked === null) {
            hideContentHighheels.classList.remove('hide-obj'); 
            clicked = hideContentHighheels;
        } else {
            clicked.classList.add('hide-obj');
            clicked = hideContentHighheels;
            hideContentHighheels.classList.remove('hide-obj'); 

        }
    })

    tabDancehall.addEventListener('click', () => {
        if (clicked === null) {
            hideContentDancehall.classList.remove('hide-obj'); 
            clicked = hideContentDancehall;
        } else {
            clicked.classList.add('hide-obj');
            clicked = hideContentDancehall;
            hideContentDancehall.classList.remove('hide-obj'); 

        }
    })

    tabJazzfunk.addEventListener('click', () => {
        if (clicked === null) {
            hideContentJazzfunk.classList.remove('hide-obj'); 
            clicked = hideContentJazzfunk;
        } else {
            clicked.classList.add('hide-obj');
            clicked = hideContentJazzfunk;
            hideContentJazzfunk.classList.remove('hide-obj'); 

        }
    })

    tabContemporary.addEventListener('click', () => {
        if (clicked === null) {
            hideContentContemporary.classList.remove('hide-obj'); 
            clicked = hideContentContemporary;
        } else {
            clicked.classList.add('hide-obj');
            clicked = hideContentContemporary;
            hideContentContemporary.classList.remove('hide-obj'); 

        }
    })

    tabExperimental.addEventListener('click', () => {
        if (clicked === null) {
            hideContentExperimental.classList.remove('hide-obj'); 
            clicked = hideContentExperimental;
        } else {
            clicked.classList.add('hide-obj');
            clicked = hideContentExperimental;
            hideContentExperimental.classList.remove('hide-obj'); 

        }
    })
}

showHideContent();

