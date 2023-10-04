$(window).scroll(function(){
	$('nav, .nav-link, .navbar-brand, .navbar-nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
