const header = document.querySelector('.header')
const sliderPlayBtn  = document.querySelector('.slider__play-btn')
const sliderVideo = document.querySelector('.slider__video')
const sliderOverlay = document.querySelector('.slider__overlay')
const sliderContent = document.querySelector('.slider__content')
const coursesImg = document.querySelectorAll('.course-item__img')

// set course image
coursesImg.forEach(courseImg => {
	courseImg.style.backgroundImage = `url(${courseImg.getAttribute('data-link')})`
});

// Handle header scroll
header.style.backgroundColor = 'transparent';
document.onscroll = function() {
	let space = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (space > 60) {
        header.style.backgroundColor = '#000';
        header.style.marginTop = '0';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.marginTop = '14px';
    }
	// video muted
}

// play slider video
sliderPlayBtn.onclick = () => {
	sliderVideo.muted = false
	sliderPlayBtn.style.opacity = 0
	sliderOverlay.style.opacity = 0
	sliderContent.style.opacity = 0
}

sliderContent.onmouseover = () => {
	sliderPlayBtn.style.opacity = 1
	sliderOverlay.style.opacity = 1
	sliderContent.style.opacity = 1
	sliderPlayBtn.style.animation = "fadeIn .3s ease"
	sliderOverlay.style.animation = "fadeIn .3s ease"
	sliderContent.style.animation = "fadeIn .3s ease"
}

