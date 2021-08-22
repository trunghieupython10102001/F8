const Course = require('../../app/models/courses')
const { mongooseArrayToObj, mongooseToObject } = require('../../util/mongoose')

class SiteController {

	index(req, res, next) {
		Course.find({}).limit(6)
			.then(courses => {
				res.render('home', {
					courses: mongooseArrayToObj(courses),
				})
			})
			.catch(next)
	}

}

module.exports = new SiteController