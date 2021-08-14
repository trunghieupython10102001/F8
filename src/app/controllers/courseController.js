const Course = require('./models/courses')
const { mongooseArrayToObj } = require('../../util/mongoose')

class CourseController {

	// [GET] /courses
	allCourses(req, res, next) {
		Course.find({})
			.then(courses => {
				res.render('courses/all-courses', {
					courses: mongooseArrayToObj(courses)
				})
			})
			.catch(next)
	}
}

module.exports = new CourseController