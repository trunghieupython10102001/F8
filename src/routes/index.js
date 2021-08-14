const homeRouter = require('./home')
const courseRouter = require('./courses')
const authenRouter = require('./authen')

function route(app) {
	app.use('/authen', authenRouter)
	app.use('/courses', courseRouter)
	app.use('/', homeRouter)
}

module.exports = route