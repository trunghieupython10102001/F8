const coursesImg = document.querySelectorAll('.course-item__img')
const coursePathItems = document.querySelectorAll('.course__path-item')
const courseInfoVideo = document.querySelector('.course-info__video')

if (courseInfoVideo) {
	courseInfoVideo.style.backgroundImage = `url(${courseInfoVideo.getAttribute('data-link')})`
}
// set course image
if (coursesImg) {
	coursesImg.forEach(courseImg => {
		courseImg.style.backgroundImage = `url(${courseImg.getAttribute('data-link')})`
	});
}
