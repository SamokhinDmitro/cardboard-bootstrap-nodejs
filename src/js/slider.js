$(document).ready(function(){
    $('.production-slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.production-slider-bottom',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }

        ],
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false
    });

    $('.production-slider-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.production-slider-top',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }

        ],

        prevArrow: '<button class="slider-btn slider-btn__prev">&lt</button>',
        nextArrow: '<button class="slider-btn slider-btn__next">&gt</button>',
        autoplay: true,
        autoplaySpeed: 2000

    });

    $('.feedback-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    prevArrow: '<button class="slider-btn slider-btn__prev">&lt</button>',
                    nextArrow: '<button class="slider-btn slider-btn__next">&gt</button>'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
            ],

        prevArrow: '<button class="feedback-btn feedback-btn__prev">'+
            '<img src="img/feedback/prev.png" alt="prev"></button>',
        nextArrow: '<button class="feedback-btn feedback-btn__next">' +
            '<img src="img/feedback/next.png" alt="next"></button>',
        autoplay: true,
        autoplaySpeed: 2000
    });

});
