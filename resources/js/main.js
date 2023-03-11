$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller();
	$('#bar4').barfiller();

	/* OWL CAROUSEL SLIDER */

	

	$('#testimonial .owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		loop: true,
		
	});

	$('#slider .owl-carousel').owlCarousel({
		items: 6,
		autoplay: true,
		autoplayTimeout: 2000,
		loop: true,
		responsive:{
			1400:{
				items:6,
			},
			1200:{
				items:6,
			},
			980:{
				items:5,
			},
			768:{
				items:4,
			},
			480:{
				items:4,
			}
			
		}
		
		
	});

	//COUNTER//

	const counters = document.querySelectorAll('.counter');

	counters.forEach(counter => {
	let updateCounter = function(){
		let startingCounter = +counter.innerHTML;
		let target = +counter.getAttribute('data-target');
		
		let incrementNumber = target / 100;

		if(startingCounter < target){
			counter.innerText = `${Math.floor(startingCounter + incrementNumber)}`;
			setTimeout(updateCounter,10);
		}
		
	} 	
	updateCounter();
	});
	
	//STICKY MENU//

	$('#js-home-content').waypoint(function(direction){
		if(direction == 'down'){
			$('nav').addClass('sticky');
		} else{
			$('nav').removeClass('sticky');
		};
	});

	$("nav ul li a").click(function(){
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");
	});

	//SMOOTH SCROOL FOR IE/SAFARI/EDGE//

	$('a').on('click', function(event){
		if((this).hash !==""){
			event.preventDefault();

			let hash = this.hash;

			$('html,body').animate({
				scrollTop: $(hash).offset().top
			},500, function(){
				window.location.hash = hash;
			});
		}
	});
	
});

	//MOBILE MENU//

	function openNav(){
		document.getElementById('myNav').style.width="100%";
	}

	function closeNav(){
		document.getElementById('myNav').style.width="0";
	}