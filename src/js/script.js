$(document).ready(function() {

	// hamburger menu

	$('.hamburger').on('click', function() {
		$('nav ul').toggleClass('open');
	});

	// add class active after click

	$('ul li a').on('click', function(e) {

		$('a.active').removeClass('active');
		$(this).addClass('active');

		$('nav ul').toggleClass('open');

		e.preventDefault();

	});

	// smooth scrolling

	$('nav a').on('click', function(e) {
		var $headerHeight = $('header').outerHeight();
		var $linkHref = $(this).attr('href');
		var $window = $(window);

		$('html, body').animate({
			scrollTop: $($linkHref).offset().top - $headerHeight
		}, 1000, function () {
			window.location.hash = $linkHref;
		});
		return false;
		e.preventDefault();
		$window.trigger('scroll');

	});


	// testimonials

	$('.testimonials-hide').hide();
	var allTest = $('.testimonials-item'),
		currentTest = 0;

	function changeTestimonials() {

		$(allTest[currentTest]).fadeOut(200, function() {
			if(currentTest == allTest.length - 1) {
				currentTest = 0;
			} else {
				currentTest++;
			}
			$(allTest[currentTest]).fadeIn(200);
		});
	}
	var testTimer = setInterval(changeTestimonials, 3000);

	// progress bar

	(function() {

	$('.progress-wrap').each(function(){
	    percent = $(this);
	    bar = $(this).children('.progress-bar');
	    moveProgressBar(percent, bar);
	});


	  // on browser resize...
	  $(window).resize(function() {
	    $('.progress-wrap').each(function(){
	        percent = $(this);
	        bar = $(this).children('.progress-bar');
	        moveProgressBar(percent, bar);
	    });
	  });

	  // SIGNATURE PROGRESS
	  function moveProgressBar(percent, bar) {
	      var getPercent = (percent.data('progress-per') / 100);
	      var getProgressWrapWidth = percent.width();
	      var progressTotal = getPercent * getProgressWrapWidth;
	      var animationLength = 1000;

	      // on page load, animate percentage bar to data percentage length
	      // .stop() used to prevent animation queueing
	      bar.stop().animate({
	          left: progressTotal
	      }, animationLength);
	  }
	 })();

	// portfolio

	$('.portfolio-link').on('click', function() {

		var $portfolioItem = $(this).data('sorting');
		var $galleryItem = $('.portfolio-img');
		var currentIndex = 0;

		if($portfolioItem == 'all') {
			$galleryItem.addClass('hide');
			setTimeout(function() {
				$galleryItem.removeClass('hide');
			}, 500);
		} else {
			$galleryItem.addClass('hide');
			setTimeout(function() {
				$('.' + $portfolioItem).removeClass('hide');
			}, 500);
		}

	});

	$('.portfolio-link').on('click', function() {

		$('.link-active').removeClass('link-active');
		$(this).addClass('link-active');
	});

});

