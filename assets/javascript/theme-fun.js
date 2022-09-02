$('.main-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: true,
                slidesToScroll: 1,
                arrows:false
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
            }
        }
    ]
    
});




$('.testimonial-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                dots: true,
                slidesToScroll: 1,
                arrows:false
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
            }
        }
    ]
    
});



//*****************************
// Match Height Functions
//*****************************
$('.matchheight').matchHeight();

 //*****************************
// top to bottom
//*****************************

var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
btn.removeClass('show');
}
});