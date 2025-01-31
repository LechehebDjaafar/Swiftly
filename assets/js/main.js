/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	// Validate that variables exist
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu');
		});
	}
};
showMenu('nav-toggle', 'nav-menu');

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLinks.forEach((link) => link.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ADD BULLET UNDER THE LINKS ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 50,
			sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*=============== Add SHADOW TO HEADER ===============*/
function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 80 viewport height, make the box shadow to the header element
	this.scrollY >= 80
		? nav.classList.add('scroll-header')
		: nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, show the scroll top button
	this.scrollY >= 560
		? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== TOGGLE DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme)
		? 'bx-toggle-right'
		: 'bx-toggle-left';

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '50px',
	duration: 2500,
	reset: false,
	delay: 400,
});

// TOP
sr.reveal(`.home__data, .app__data, .contact__container`, {origin: 'top'});

// RIGHT
sr.reveal(`.home__img`, { delay: 700, origin: 'right' });

// BOTTOM
sr.reveal(`.footer__social`, { origin: 'bottom', delay: 1000 });
sr.reveal(`.services__data, .footer__content`, { origin: 'bottom', interval: 100 });
sr.reveal(`.security__img`, { origin: 'bottom', delay: 700 });
sr.reveal(`.about__data`, { origin: 'bottom' });

// LEFT
sr.reveal(`.security__data`, { origin: 'left' });
sr.reveal(`.about__img, .app__img`, { origin: 'left', delay: 700 });
