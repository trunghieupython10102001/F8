const homeRouter = require('./home')
const courseRouter = require('./courses')
const authenRouter = require('./authen')
const checkLogin = require('../app/middlewares/checkLogin')

function route(app) {
	app.use(checkLogin)
	app.use('/authen', authenRouter)
	app.use('/courses', courseRouter)
	app.use('/',  homeRouter)
}

module.exports = route