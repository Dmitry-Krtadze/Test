$('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [{
            breakpoint: 1240,
            settings: {
                slidesToShow: 3,
                arrows: true,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                arrows: false,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});