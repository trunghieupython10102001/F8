const User = require('../../app/models/users')
const Course = require('../../app/models/courses')
const config = require('../../config/auth')
const jwt = require('jsonwebtoken')

async function subcribe(req, res, next) {
	try {
		if (req.authenticated) {
			let token = req.cookies.token	
			let data = jwt.verify(token, config.secret)
			let user = await User.findOne({ _id: data.id })
			if (user.courses.includes(req.params.id)) {
				res.json({ message: 'You subcribed this course before' })
			} else {
				
				Promise.all([
					Course.findOneAndUpdate(
						{ _id : req.params.id }, 
						{ $push: { student : data.id }}
					),
					User.findOneAndUpdate(
						{ _id: data.id }, 
						{ $push: { courses: req.params.id }}
					)
				])
					.then(() => {
						res.json({
							course: req.params.id,
							id: data.id
						})
					})
			}
		} else {
			res.redirect('/authen/login')
		}	
	} catch (error) {
		next()
	}
}

module.exports = subcribe