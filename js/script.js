$(".slider").slick({
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: false,
                autoplay: true

            }
        },
        {
            breakpoint: 541,
            settings: {
                arrows: false,

                slidesToShow: 1,


            }
        },
    ]

})
