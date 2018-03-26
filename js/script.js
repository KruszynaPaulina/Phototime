$('a[href^="#nav"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000, 'linear');
    }

});


$('.hero__button').on('click', function(event) {

    var target = $('#nav-photoapp');
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: target.offset().top}, 1000, 'linear');

});

$('.photoapp__button').on('click', function(event) {

    var target = $('#nav-design');
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: target.offset().top}, 1000, 'linear');

});

$('.design_button').on('click', function(event) {

    var target = $('.community');
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: target.offset().top}, 1000, 'linear');

});

$('#carouselDesignControls').on('slid.bs.carousel', function() {
		var currentSlideName = $('.counter');
		var activeSlideNumber = $('div.active').data('number');
		currentSlideName.text(activeSlideNumber);
});
