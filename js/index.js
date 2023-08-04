document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCrossLine = (window.innerHeight / 4 * 3) + window.scrollY;
		// console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop /*+ (el.offsetHeight / 2)*/;
			if (windowCrossLine >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};


	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});

document.querySelector('.menu-burger').addEventListener('click', function(e) {
	document.querySelector('.menu-section').classList.toggle('active');
	document.querySelector('.menu-burger').classList.toggle('active');
})

const galleryButtons = document.querySelectorAll('.left-gallery__block>button');
for(let i=0; i<3; i++) {
	galleryButtons[i].addEventListener('click', function() {
		let activeNow = document.querySelectorAll('.gallery__container>.row>div>div>img.active')		
		for(let k=0; k<3; k++) {
			activeNow[k].classList.remove('active');
		}
		for(let j=1; j<4; j++) {
				let currentPicSrc = `img/gallery${3*i+j}.png`;
				document.querySelector(`[src="${currentPicSrc}"]`).classList.add('active');
			}
		}
	)	
}

/* gallery-2 */
const gallery2Items = document.querySelectorAll('.gallery2-pic__container>img');
for(let i=0; i<4; i++) {
	gallery2Items[i].addEventListener('click', function() {
		document.querySelector('.gallery2-pic__container>.active').classList.remove('active');
		this.classList.add('active')
	})	
}

function itemsSlide() {
	let testimonialItemWidth = document.querySelector('.testimonial-item').offsetWidth;
	document.querySelector('.testimonial-buttons>.carousel-control-prev').addEventListener('click', function(e) {
	if (window.innerWidth > 767) {
		document.querySelector('.testimonials__items').scrollLeft -= testimonialItemWidth * 1.3;
	}
	else if (window.innerWidth > 576) {
		document.querySelector('.testimonials__items').scrollLeft -= testimonialItemWidth * 1.16;
	}
	else {
		document.querySelector('.testimonials__items').scrollLeft -= testimonialItemWidth * 1.07;	
	}
})
	document.querySelector('.testimonial-buttons>.carousel-control-next').addEventListener('click', function(e) {
		if (window.innerWidth > 767) {
			console.warn(testimonialItemWidth);
			document.querySelector('.testimonials__items').scrollLeft += testimonialItemWidth * 1.3;
		}
		else if (window.innerWidth > 576) {
			console.warn(testimonialItemWidth);
			document.querySelector('.testimonials__items').scrollLeft += testimonialItemWidth * 1.16;
		}
		else {
			console.warn(testimonialItemWidth);
			document.querySelector('.testimonials__items').scrollLeft += testimonialItemWidth * 1.07;	
		}
})
}

itemsSlide()

window.addEventListener('resize', itemsSlide);