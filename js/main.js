$(document).ready(function () {

    // Fixed header
    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 30) {
            $("#header").addClass("header-scroll")
        } else {
            $("#header").removeClass("header-scroll")
        }
    });

    // Intro product carousel
    $('.intro-product__carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.intro-product__navs-prev'),
        nextArrow: $('.intro-product__navs-next'),
    });

    // Single product gallery
    $('.product-gallery__carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.single-gallery__prev'),
        nextArrow: $('.single-gallery__next'),
    });

    // Team carousel
    $('.company-content__team-carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.team-carousel-prev'),
        nextArrow: $('.team-carousel-next'),
    });

    // Intro background videos
    $('.intro-background').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        speed: 1000,
        appendDots: $('.intro-dots'),
        dots: true,
        dotsClass: 'intro-dots__item',
        customPaging : function(slider, index) { 
            var num = index + 1;
            return '<span class="dot">'+ num +'</span>';
        },
        arrows: false
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

    // Hovering menu
    $(".header .header-menu nav ul li.has-submenu").hover(function () {
        $('.header').addClass("visible");
    }, function () {
        $('.header').removeClass("visible");
    });

    // Show hidden contact form on click "Single product page"
    $('.single-product__form').hide();
    $('.single-product__bottom-contact a').on('click', function() {
        $(this).toggleClass('active');
        $('.single-product__form').slideToggle('slow');
    });
    $('.single-product__form-close').on('click', function() {
        $('.single-product__form').slideToggle('slow');
        $('.single-product__bottom-contact a').removeClass('active');
    });

    // Scroll to contact form on click Question block
    $('#question-block').on('click', function() {
        $('html, body').animate({
            scrollTop: $(".single-product__bottom").offset().top - 100,
        }, 150);
        if ( $('.single-product__form').is(":hidden") ) {
            $('.single-product__form').slideToggle('slow');
            $('.single-product__bottom-contact a').addClass('active');
        }
    });
});
