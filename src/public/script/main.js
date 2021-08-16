const userControlsCourses = $('.user-controls-courses')
const userControlsNotify = $('.user-controls-notify')
const userControlSettings = $('.user-controls-settings')
const userControls = $$('.user-controls-item')
const controlsBoxSetting = $('#controls-box-setting')

if (userControlSettings) {
	userControlSettings.onclick = function() {
		controlsBoxSetting.classList.toggle('hidden')
	}
}
