gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

$(document).ready(function () {
	TweenMax.set('.project-preview', { width: '100vw' });

	var tl = new TimelineLite();

	$(document).on('mouseover', '.navegacion__items', function (evt) {
		tl = new TimelineLite();
		tl.to($('.project-preview-wrapper'), 1, {
			// width: '100%',
			transform: 'translateX(-100)',
			ease: Expo.easeInOut,
		});
	});
});
// --------------------------------------------
$('.navigation-link-1').hover(function () {
	$('.project-preview-wrapper').css({
		transform: 'translateX(0)',
	});
});

$('.navigation-link-2').hover(function () {
	$('.project-preview-wrapper').css({
		transform: 'translateX(-900px)',
	});
});

$('.navigation-link-3').hover(function () {
	$('.project-preview-wrapper').css({
		transform: 'translateX(-38%)',
	});
});

$('.navigation-link-4').hover(function () {
	$('.project-preview-wrapper').css({
		transform: 'translateX(-58%)',
	});
});

$('.navigation-link-5').hover(function () {
	$('.project-preview-wrapper').css({
		transform: 'translateX(-78%)',
	});
});

// const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
// const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

const nave = document.querySelector('.animacion-nave');
const planeta1 = document.querySelector('.planeta1');
const planeta2 = document.querySelector('.planeta2');
const planeta4 = document.querySelector('.planeta4');
const planeta5 = document.querySelector('.planeta5');
const planeta6 = document.querySelector('.planeta6');

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.secccion__historia1-contenedor',
		pin: true,
		start: 'top top',
		end: '100%',
		scrub: true,
		// markers: true,
		scrub: 1,
	},
	motionPath: {
		autoRotate: true,
	},
});

tl.to(nave, { scale: 0.5, y: '30vh', duration: 8 });
tl.to(planeta1, { opacity: 1, y: '-50vh', scale: 1.3, duration: 4 }, '-=5');
tl.to(planeta2, { opacity: 1, y: '-90vh', duration: 4 }, '-=6');
tl.to(nave, { rotate: 250, duration: 3.5 }, '-=.4');
tl.to(nave, { x: '-35vw', duration: 4 }, '-=2');
tl.to(planeta2, { y: '-150vh', duration: 3.5 }, '-=4');
tl.to(nave, { rotate: 115, duration: 3.5 }, '-=1.5');
tl.to(planeta1, { y: '-150vh', duration: 3.5 }, '-=2.5');
tl.to(nave, { x: '75vh', duration: 10 }, '-=1.5');
tl.to(planeta4, { x: '-120vw', opacity: 1, duration: 8 }, '-=8.5');
tl.to(nave, { rotate: 250, duration: 5 }, '-=2');
tl.to(nave, { x: '-35vw', y: 300, duration: 8 }, '-=1');
tl.to(planeta4, { x: '-100', duration: 8 }, '-=7');
tl.to(planeta5, { x: '130vw', opacity: 1, duration: 8 }, '-=8.5');
tl.to(nave, { rotate: 110, duration: 5 }, '-=2');
tl.to(planeta5, { y: '-150vh', duration: 6 }, '-=3');
tl.to(planeta6, { y: '-110vh', opacity: 1, duration: 9 }, '-=5');
tl.to(nave, { x: '0vh', duration: 5 }, '-=7');
tl.to(nave, { y: 300, rotate: 0, duration: 3 }, '-=3');
tl.to(planeta6, { y: '-180vh', duration: 8 });
tl.to(nave, { scale: 1, duration: 4 }, '-=1.5');

gsap.to('.cuadrado2, .cuadrado4', {
	scrollTrigger: {
		trigger: '.nosotros__contenedor',
		start: 'top center',
		end: '100% top',
		scrub: 1,
		// markers: true,
	},
	delay: 3,
	height: '400',
	duration: 1,
	ease: 'elastic',
});
gsap.to('.cuadrado1, .cuadrado3', {
	scrollTrigger: {
		trigger: '.nosotros__contenedor',
		start: 'top center',
		end: '100% top',
		scrub: 1,
		// markers: true,
	},
	delay: 3,
	height: 300,
	duration: 1,
	ease: 'elastic',
});

gsap.defaults({ ease: 'none', duration: 2 });
const tl2 = gsap.timeline();

tl2
	.from('.secccion__nosotros2', { xPercent: -100 })
	.from('.secccion__nosotros3', { xPercent: 100 });

ScrollTrigger.create({
	animation: tl2,
	trigger: '.secccion__contenedor',
	start: 'top top',
	end: '+=2000',
	scrub: true,
	pin: true,
	anticipatePin: 1,
});

gsap.to('.cuadrado6, .cuadrado8', {
	scrollTrigger: {
		trigger: '.productos__contenedor',
		start: 'top center',
		end: '100% top',
		scrub: 1,
		// markers: true,
	},
	delay: 3,
	width: 400,
	duration: 1,
	ease: 'elastic',
});
gsap.to('.cuadrado5, .cuadrado7', {
	scrollTrigger: {
		trigger: '.productos__contenedor',
		start: 'top center',
		end: '100% top',
		scrub: 1,
		// markers: true,
	},
	delay: 3,
	width: 300,
	duration: 1,
	ease: 'elastic',
});

gsap.defaults({ ease: 'none', duration: 2 });
const tl3 = gsap.timeline();

tl3.from('.productos__contenedor2', { yPercent: -100 });

ScrollTrigger.create({
	animation: tl3,
	trigger: '.secccion__productos',
	start: 'top top',
	end: '+=2000',
	scrub: true,
	pin: true,
	anticipatePin: 1,
});

const tl4 = gsap.timeline({
	scrollTrigger: {
		trigger: '.secccion__clientes',
		start: 'top top',
		end: '+=3000',
		scrub: true,
		pin: true,
		// markers: true,
		anticipatePin: 1,
		duration: 5,
	},
});
tl4
	.to('.clientes__contenedor__titulo', { yPercent: -200 })
	.to(
		'.hexagono__imagen1',
		{ yPercent: -400, opacity: 1, ease: 'easeInOut' },
		'-=1.5'
	)
	.to(
		'.hexagono__imagen2',
		{ yPercent: -350, opacity: 1, ease: 'easeInOut' },
		'-=1'
	)
	.to(
		'.hexagono__imagen3',
		{ yPercent: -250, opacity: 1, ease: 'easeInOut' },
		'-=1'
	)
	.to(
		'.hexagono__imagen4',
		{ yPercent: -200, opacity: 1, ease: 'easeInOut' },
		'-=1'
	);

const tl5 = gsap.timeline({
	scrollTrigger: {
		trigger: '.contenedor__contáctanos__formulario',
		start: '100% 100%',
		end: '100% 100%',
		// scrub: true,
		// pin: true,
		// markers: true,
		anticipatePin: 1,
		// duration: 5,
	},
});
tl5
	.to('.contáctanos__items_1', {
		yPercent: 470,
		x: '-50vw',
		duration: 2,
		delay: 3,
		ease: 'power1.inOut',
	})
	.to(
		'.contáctanos__items_2',
		{ yPercent: 470, x: '-37vw', duration: 2, ease: 'power1.inOut' },
		'-=1.5'
	)
	.to(
		'.contáctanos__items_3',
		{ yPercent: 220, x: '5vw', duration: 2, ease: 'power1.inOut' },
		'-=1.3'
	)
	.to(
		'.contáctanos__items_4',
		{ yPercent: 220, x: '15vw', duration: 2, ease: 'power1.inOut' },
		'-=1'
	)
	.to(
		'.formulario',
		{
			display: 'block',
			y: 245,
			duration: 5,
			ease: 'elastic.inOut(1, 0.3)',
		},
		'-=3.2'
	)
	.to(
		'.formulario',
		{
			opacity: 1,

			duration: 1,
		},
		'-=2.9'
	);
