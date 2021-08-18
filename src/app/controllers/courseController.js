const Course = require('../../app/models/courses')
const { mongooseArrayToObj, mongooseToObject } = require('../../util/mongoose')

class CourseController {

	// [GET] /courses
	newestCourses(req, res, next) {
		Course.find({}).sort({ description: 'asc'})
			.then(courses => {
				res.render('courses/newest-courses', {
					courses: mongooseArrayToObj(courses),
				})
			})
	}

	// [GET] /courses/:slug
	details(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then(course => {
				res.render('courses/details-course', {
					course: mongooseToObject(course),
				})
			})
			.catch(next)
	}

	// [GET] /courses/newest
	allCourses(req, res, next) {
		Course.find({})
			.then(courses => {
				res.render('courses/all-courses', {
					courses: mongooseArrayToObj(courses),
				})
			})
			.catch(next)
	}
}

module.exports = new CourseController