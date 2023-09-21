const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ********** Ajout des dots ************

const dotsDiv = document.querySelector('.dots');

for (let i = 1; i <= slides.length; i++) {
	const dot = document.createElement('span')
	dot.classList.add('dot', `dot_${i}`)
	if (i === 1) {
		dot.classList.add('dot_selected')
	}
	dotsDiv.appendChild(dot)
};


// ********** EventsListeners ************


const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
	arrow.addEventListener('click', event => {
		const imgCurrent = document.querySelector('.banner-img')
		const imgText = document.querySelector('#banner p')
		const dotCurrent = document.querySelector('.dot_selected');
		let dotIndex = Array.from(dotsDiv.children).indexOf(dotCurrent)
		if (arrow.classList.contains('arrow_left')) {
			if (dotIndex === 0) {
				dotIndex = slides.length
			}
			dotIndex--
		}
		if (arrow.classList.contains('arrow_right')) {
			if (dotIndex === 3) {
				dotIndex = -1
			}
			dotIndex++
		}
		dotCurrent.classList.remove('dot_selected')
		dotsDiv.children[dotIndex].classList.add('dot_selected')
		imgCurrent.src = `./assets/images/slideshow/${slides[dotIndex].image}`
		imgText.innerHTML = slides[dotIndex].tagLine
	})
});
