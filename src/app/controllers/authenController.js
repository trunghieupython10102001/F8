const User = require('../../app/models/users')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const config = require('../../config/auth')
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
		User.findOne({ email: req.body.email })
			.then(user => {
				if (!user) {
					res.redirect('/authen/login?email=false')
				} else {
					if (mongooseToObject(user).password === hashingPassword) {
						let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 })
						res.cookie('token', token)
						res.redirect('/')
					} else {
						res.redirect('/authen/login?password=false')
					}
				}
			})
			.catch(next)
	}

	// [GET] /authen/signup
	signup(req, res, next) {
		let valid = req.query.valid
		let message = valid ? 'Email đã tồn tại' : ''
		User.find({})
			.then(users => {
				res.render('authentication/signup', { 
					layout: 'authen-layout.hbs',
					message: message,
				})
			})
			.catch(next)
	}

	// [POST] /authen/signup
	create(req, res, next) {
		req.body.notification = "on" ? true : false
		req.body.password = md5(req.body.password)
		User.findOne({ email: req.body.email})
			.then(user => {
				if (user) {
					res.redirect('/authen/signup?valid=false')
				}
				else {
					const user = new User(req.body)
					user.save()
					let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 })
					res.cookie('token', token)
					res.redirect('/')
				}
			})
			.catch(next)
	}

	// [GET] /authen/logout
	logout(req, res, next) {
		res.clearCookie('token')		
		res.redirect('/authen/login')
	}
}

module.exports = new AuthenController