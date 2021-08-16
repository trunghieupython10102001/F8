const Course = require('./models/courses')
const User = require('./models/users')
const { mongooseArrayToObj, mongooseToObject } = require('../../util/mongoose')

class CourseController {

	// [GET] /courses
	newestCourses(req, res, next) {
		let signedCookies = req.signedCookies.id || null
		Promise.all([Course.find({}).sort({ description: 'desc' }), User.findOne({ _id: signedCookies })])
			.then(([courses, user]) => {
				res.render('courses/newest-courses', {
					courses: mongooseArrayToObj(courses),
					user: mongooseToObject(user)
				})
			})
			.catch(next)
	}

	// [GET] /courses/newest
	allCourses(req, res, next) {
		let signedCookies = req.signedCookies.id || null
		Promise.all([Course.find({}), User.findOne({ _id: signedCookies })])
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