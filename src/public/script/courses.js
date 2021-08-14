const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const coursesImg = $$('.course-item__img')
const coursePathItems = $$('.course__path-item')

// set course image
coursesImg.forEach(courseImg => {
	courseImg.style.backgroundImage = `url(${courseImg.getAttribute('data-link')})`
});
console.log(coursePathItems)
coursePathItems[0].onclick = function() {
	coursePathItems[0].classList.add('btn--secondary')
	coursePathItems[1].classList.remove('btn--secondary')
}
coursePathItems[1].onclick = function() {
	coursePathItems[1].classList.add('btn--secondary')
	coursePathItems[0].classList.remove('btn--secondary')
}