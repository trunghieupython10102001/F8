const Course = require('./models/courses')
const User = require('./models/users')
const { mongooseArrayToObj, mongooseToObject } = require('../../util/mongoose')

class CourseController {

	// [GET] /courses
	allCourses(req, res, next) {
		
		Promise.all([Course.find({}), User.findOne({ _id: req.signedCookies.id })])
			.then(([courses, user]) => {
				res.render('courses/all-courses', {
					courses: mongooseArrayToObj(courses),
					user: mongooseToObject(user)
				})
			})
			.catch(next)
	}
}

module.exports = new CourseController