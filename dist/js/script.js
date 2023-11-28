document.addEventListener("DOMContentLoaded", () => {

	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.reviews__arrow--next',
			prevEl: '.reviews__arrow--prev',
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}

	});

	// бургер 
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('burger_active')
		menu.classList.toggle('open');
	})


});