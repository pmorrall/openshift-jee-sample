jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .thb-search, #thb-searchForm .thb-close").click(function(){
		$("#thb-searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#thb-map .thb-sectionHeading").click(function(){
		$("#thb-map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	/* =============== TESTIMONIAL SLIDER =============== */
	$('.thb-testimonialSlider').unslider({
		nav: false,
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
		}
	});

	/* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#thb-whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#thb-header').height() || $(this).scrollTop() > $('#thb-header').height()) {
			$('body').addClass("thb-fixed-nav");
			$('body').css('padding-top', $('#thb-navbar').height() + 'px');
		} else {
			$('body').removeClass("thb-fixed-nav");
			$('body').css('padding-top', 0);
		}
	});
	
	/* =============== ISOTOP =============== */	
	$(window).load(function(){
		$portfolio = $('.thb-portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});
	
	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.thb-portfolioItems > li').each( function() { $(this).hoverdir(); } );
	
	/* =============== PERTTYPHOTO =============== */
	$("a.thb-prettyPhoto").prettyPhoto();
	
	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('#thb-navbar ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#thb-scrollToTop').fadeIn();
		} else {
			$('#thb-scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#thb-scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});