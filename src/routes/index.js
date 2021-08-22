const homeRouter = require('./home')
const courseRouter = require('./courses')
const authenRouter = require('./authen')
const adminRouter = require('./admin')
const checkLogin = require('../app/middlewares/checkLogin')
const subcribe = require('../app/api/subcribe')

function route(app) {
	app.use(checkLogin)
	app.patch('/subcribe/:id', subcribe)
	app.use('/admin', adminRouter)
	app.use('/authen', authenRouter)
	app.use('/courses', courseRouter)
	app.use('/',  homeRouter)
}

module.exports = route