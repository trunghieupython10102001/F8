const { mongooseToObject } = require("../../util/mongoose")
const User = require('../models/users')
const jwt = require('jsonwebtoken')
const config = require('../../config/auth')

function checkLogin(req, res, next) {
	let token = req.cookies.token
	if (token) {
		jwt.verify(token, config.secret, function (err, data) {
			if (err) {
				next(err)
			} else {
				User.findOne({ _id: data.id })
					.then(user => {
						if (user) {
							res.locals.user = {
								username: mongooseToObject(user).name
							}
							next()
						}
						else {
							next()
						}
					})
					.catch(next)
			} 
		})
	} else {
		next()
	}
}

module.exports = checkLogin