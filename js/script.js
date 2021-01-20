$(document).ready(function(){
	
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 5000);
	
	
		$(".js_sticky_menu").waypoint(function(direction) {

			if (direction == "down") {
				$("nav").addClass("sticky_menu");
			} else {
				$("nav").removeClass("sticky_menu");
			}
		});
	
	
		$(window).scroll(function() {

			if ($(this).scrollTop() > 220) {
				$("a.scroll_up_btn").fadeIn();
			} else {
				$("a.scroll_up_btn").fadeOut();
			}

		});
	
	
		const menuBtn = document.querySelector('.menu-btn');
		let menuOpen = false;
		menuBtn.addEventListener('click', () => {
		  if(!menuOpen) {
			menuBtn.classList.add('open');
			menuOpen = true;
		  } else {
			menuBtn.classList.remove('open');
			menuOpen = false;
		  }
		});
	
	
	
		$('.slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
		});
		
})