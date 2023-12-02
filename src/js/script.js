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

	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();

			const targetId = link.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;

				window.scrollTo({
					top: offset - 170,
					behavior: 'smooth'
				});
			}
		});
	});


});