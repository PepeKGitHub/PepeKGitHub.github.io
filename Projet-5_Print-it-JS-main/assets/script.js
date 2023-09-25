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
];


// ********** Ajout des arrow ************


const banner = document.getElementById('banner');
const leftArrow = document.createElement('img');
const rightArrow = document.createElement('img');

banner.insertBefore(leftArrow, banner.querySelector('p'));
banner.insertBefore(rightArrow, banner.querySelector('p'));

leftArrow.classList.add('arrow', 'arrow_left');
rightArrow.classList.add('arrow', 'arrow_right');
leftArrow.src = './assets/images/arrow_left.png';
rightArrow.src = './assets/images/arrow_right.png';
leftArrow.alt = 'Banner Arrow-left';
rightArrow.alt = 'Banner Arrow-right';


// ********** Ajout des dots ************

const dotsDiv = document.querySelector('.dots');
let dot;

for (let i = 0; i < slides.length; i++) {
	dot = document.createElement('span');
	dot.classList.add('dot', `dot_${i + 1}`);
	dot.dataset.slideArray = i;
	if (i === 0) {
		dot.classList.add('dot_selected');
	}
	dot.addEventListener('click', (event) => {
		let dotIndex = event.target.dataset.slideArray;
		updateUI(dotIndex);
	});
	dotsDiv.appendChild(dot);
};


// ********** Carroussel ************


const arrows = document.querySelectorAll('.arrow');
const imgCurrent = document.querySelector('.banner-img');
const imgText = document.querySelector('#banner p');

let dotCurrent = document.querySelector('.dot_selected');
let dotCurrentIndex = Array.from(dotsDiv.children).indexOf(dotCurrent);

function updateDots(arrow) {
	if (arrow.classList.contains('arrow_left')) {
		dotCurrentIndex = (dotCurrentIndex - 1 + slides.length) % slides.length;
	}
	if (arrow.classList.contains('arrow_right')) {
		dotCurrentIndex = (dotCurrentIndex + 1) % slides.length;
	}
}

function updateUI(dotCurrentIndex) {
	dotCurrent.classList.remove('dot_selected');
	dotsDiv.children[dotCurrentIndex].classList.add('dot_selected');
	dotCurrent = document.querySelector('.dot_selected');
	imgCurrent.src = `./assets/images/slideshow/${slides[dotCurrentIndex].image}`;
	imgText.innerHTML = slides[dotCurrentIndex].tagLine;
}

arrows.forEach(arrow => {
	arrow.addEventListener('click', () => {
		updateDots(arrow);
		updateUI(dotCurrentIndex);
	});
});