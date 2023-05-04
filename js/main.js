$(document).ready(function () {

    // Team carousel
    $('.company-content__team-carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.team-carousel-prev'),
        nextArrow: $('.team-carousel-next'),
    });

    // Change image by click(MAP)
    $('.location-info ul li').click(function(){
        $imgsrc = $(this).attr('data-image');
        $('.location-overlay').attr('src',$imgsrc);
    });

    // Scroll top
    var btn = $('#button-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '400');
    });

    // Change image on hover block "FAQ"
    let imageGet = Array.from(document.querySelectorAll('.faq-list__item button'));
    let imageSet = document.querySelector('.faq-image img');

    for ( let item of imageGet ) {
        item.addEventListener('mouseover', function() {
            let imageSrc = item.dataset.src;
            imageSet.src = imageSrc;
        });
    }
    
});
