const userControlsCourses = document.querySelector('.user-controls-courses')

const userControlsNotify = document.querySelector('.user-controls-notify')
const userControlSettings = document.querySelector('.user-controls-settings')
const userControls = document.querySelectorAll('.user-controls-item')
const controlsBoxSetting = document.querySelector('#controls-box-setting')

if (userControlSettings) {
	userControlSettings.onclick = function() {
		controlsBoxSetting.classList.toggle('hidden')
	}
}
