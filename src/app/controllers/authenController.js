const User = require('./models/users')
const md5 = require('md5')
const { mongooseArrayToObj, mongooseToObject } = require('../../util/mongoose')

class AuthenController {

	// [GET] /authen/login
	toLogin(req, res, next) {
		let wrongEmail = req.query.email ? 'Email này không tồn tại, vui lòng thử lại' : ''
		let wrongPassword = req.query.password ? 'Sai mật khẩu, xin vui lòng nhập lại' : ''
		res.render('authentication/login', { 
			layout: 'authen-layout.hbs',
			message: {
				wrongEmail,
				wrongPassword,
			}
		})
	}
	// [POST] /authen/login
	logined(req, res, next) {
		const hashingPassword = md5(req.body.password)
		
		User.findOne({ email: req.body.email})
			.then(user => {
				try {
					let password = mongooseToObject(user).password 	
				} catch (error) {
					res.redirect('/authen/login?email=false')
				}
				if (mongooseToObject(user).password === hashingPassword) {
					res.cookie('id', user.id, { signed: true })
				} else {
					res.redirect('/authen/login?password=false')
				}
			})
			.then(() => res.redirect('/'))
			.catch(next)
	}

	// [GET] /authen/signup
	signup(req, res, next) {
		let valid = req.query.valid
		let message = valid ? 'Email đã tồn tại' : ''
		console.log(valid)
		User.find({})
			.then(users => {
				res.render('authentication/signup', { 
					layout: 'authen-layout.hbs',
					message: message,
				})
			})
	}

	// [POST] /authen/signup
	create(req, res, next) {
		req.body.notification = "on" ? true : false
		req.body.password = md5(req.body.password)
		User.findOne({ email: req.body.email})
			.then(user => {
				try {
					let email = mongooseToObject(user).email 	
					console.log(typeof email)
					if (!user) {
						return
					}
					if (email) {
						res.redirect('/authen/signup?valid=false')
						return
					}
				} catch (error) {
					return
				}
			})
			.catch(next)
		const user = new User(req.body)
		user.save()
			.then(() => res.cookie('id', user.id, {signed: true}))
			.then(() => res.redirect('/'))
			.then(() => {
				User.findOne()
			})
			.catch(next)
	}

	// [GET] /authen/logout
	logout(req, res, next) {
		res.clearCookie('id')		
		res.redirect('/authen/login')
	}
}

module.exports = new AuthenController