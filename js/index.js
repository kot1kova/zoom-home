gsap.registerPlugin(ScrollTrigger)

const { innerHeight } = window

var elementOne = document.getElementById('element-one')

var parallaxInstance = new Parallax(elementOne, {
	relativeInput: true,
	pointerEvents: false,
})

var sceneOne = document.getElementById('scene-one')

var parallaxInstance = new Parallax(sceneOne, {
	relativeInput: true,
	pointerEvents: false,
})

var sceneTwo = document.getElementById('scene-two')

var parallaxInstance = new Parallax(sceneTwo, {
	relativeInput: true,
	pointerEvents: false,
})
var sceneThree = document.getElementById('scene-three')

var parallaxInstance = new Parallax(sceneThree, {
	relativeInput: true,
	pointerEvents: false,
})

// ===========================================
// ===========================================
// ===========================================
// ===========================================

gsap.to('.zoom__item', {
	scale: 13,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '#zoom',
		start: 'top top',
		end: 'bottom bottom',
		pin: true,
		end: `+=${innerHeight * 2.2}`,
		scrub: 3,
		rotation: -200,

		onLeave: () => gsap.to(zoom__item, { opacity: 0, duration: 0.2 }),
		onEnterBack: () => gsap.to(zoom__item, { opacity: 1, duration: 1 }),
		// markers: true,
	},
})

let timeline = gsap.timeline({
	scrollTrigger: {
		trigger: '#zoom',
		start: 'top +=30px',
		end: `+=${innerHeight * 1.5}`,
		// rotation: -200,

		// pin: true,
		scrub: 5,
		//   markers: true,  // Включить для отладки
	},
})

gsap.utils.toArray('.card').forEach((card, i) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: card,
			start: 'top top',
			end: 'bottom +=420px',
			scrub: 5,
			pin: true,
			pinSpacing: false,
			// markers: true,
			onLeave: () => gsap.to(card, { opacity: 0, duration: 1, scale: 0.4 }),
			onEnterBack: () => gsap.to(card, { opacity: 1, duration: 1, scale: 1 }),
		},
	})

	// tl.to(card.querySelector('.cards__img-img'), {
	// 	rotate: 180,
	// 	duration: 10,
	// 	ease: 'power2.inOut',
	// 	onComplete: () => {},
	// })
})

timeline.fromTo(
	'.zoom__info',

	{ opacity: 0, scale: 0.1 },
	{
		scrub: 5,
		opacity: 1,
		scale: 2,
		duration: 340,
		ease: 'power2.inOut', // Плавная анимация
	}
)

timeline.to('.zoom__info', {
	//   markers: true,
	scrub: 5,
	opacity: 0, // Исчезновение элемента
	scale: 4, // Элемент продолжает увеличиваться
	duration: 180, // Время на исчезновение
	ease: 'power2.inOut', // Плавная анимация
})

function animateCounters() {
	const counters = document.querySelectorAll('.stats__numb')

	counters.forEach(counter => {
		const target = +counter.getAttribute('data-target')

		// Создаем внутренний элемент для анимации, оставляя <span> неизменным
		const numText = document.createElement('span')
		numText.classList.add('num-text')
		numText.innerText = '0'
		counter.prepend(numText) // Вставляем <span> перед плюсом

		gsap.fromTo(
			numText,
			{ innerText: 0 },
			{
				innerText: target,
				duration: 3,
				scrollTrigger: {
					trigger: counter,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
				snap: { innerText: 1 },
				ease: 'power1.out',
				onUpdate: function () {
					numText.innerText = Math.ceil(numText.innerText)
				},
			}
		)
	})
}

// Запуск анимации при скролле к блоку
animateCounters()
