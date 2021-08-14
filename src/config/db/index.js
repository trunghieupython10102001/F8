const mongoose = require('mongoose')

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/F8_programming', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
		})
		console.log("Connect database successfully.")
	} catch (error) {
		console.log('Some error occured!!!')	
	}
}

module.exports = { connect }