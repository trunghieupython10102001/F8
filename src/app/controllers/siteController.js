const express = require('express')
const router = express.Router()
const Course = require('./models/courses')
const User = require('./models/users')
const { mongooseArrayToObj, mongooseToObject } = require('../../util/mongoose')

class SiteController {

	index(req, res, next) {
		Promise.all([Course.find({}).limit(6), User.findOne({ _id: req.signedCookies.id })])
			.then(([courses, user]) => {
				res.render('home', {
					courses: mongooseArrayToObj(courses),
					user: mongooseToObject(user)
				})
			})
			.catch(next)
	}

}

module.exports = new SiteController