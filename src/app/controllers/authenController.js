const User = require('./models/users')
const md5 = require('md5')
const { mongooseArrayToObj } = require('../../util/mongoose')

class AuthenController {

	// [GET] /authen/login
	login(req, res, next) {
		res.render('authentication/login', { layout: 'authen-layout.hbs'})
	}

	// [GET] /authen/signup
	signup(req, res, next) {
		res.render('authentication/signup', { layout: 'authen-layout.hbs' })
	}

	// [POST] /authen/signup
	create(req, res, next) {
		req.body.notification = "on" ? true : false
		req.body.password = md5(req.body.password)
		const user = new User(req.body)
		user.save()
			.then(() => res.cookie('id', user.id, {signed: true}))
			.then(() => res.redirect('/'))
			.then(() => {
				User.findOne()
			})
			.catch(next)
	}

}

module.exports = new AuthenController