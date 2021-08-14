const express = require('express')
const router = express.Router()
const Course = require('./models/courses')
const User = require('./models/users')
const { mongooseArrayToObj } = require('../../util/mongoose')

class SiteController {

	index(req, res, next) {
		Promise.all([Course.find({}).limit(6), User.findOne({ _id: req.signedCookies.id })])
			.then(([courses, user]) => {
				console.log(user)
				res.render('home', {
					courses: mongooseArrayToObj(courses),
					user,
					username: user.modelName,
				})
				
			})
			.catch(next)
	}

}

module.exports = new SiteController