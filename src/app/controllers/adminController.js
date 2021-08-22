const Course = require('../models/courses')

class AdminController {

	// [GET] /admin/courses
	courseManagement(req, res, next) {
		res.render('admin/course',)
	}

}

module.exports = new AdminController
