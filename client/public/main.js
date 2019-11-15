$(document).ready(function () {
        const breakpoint = [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 1009,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 460,
            settings: {
                slidesToShow: 1
            }
        }];
        /**  First Slider */
        $(".slider-one").not(".slick-intialized").slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            prevArrow: ".site-slider .slider-btn .prev",
            nextArrow: ".site-slider .slider-btn .next"
        });
        /**  Second  Slider */
        $(".slider-two")
            .not(".slick-intialized")
            .slick({
                prevArrow: ".site-slider-two .prev",
                nextArrow: ".site-slider-two .next",
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                responsive: breakpoint
            });

        /**  Four  Slider */
        $(".slider-four").not(".slick-intialized").slick({
            prevArrow: ".site-slider-four .prev",
            nextArrow: ".site-slider-four .next",
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            responsive: breakpoint
        });

    }

);