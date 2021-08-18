const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
	name: { type: String, required: true},
	email: { type: String, required: true, unique: true },
	avatar: { type: String },
	password: { type: String },
	notification: { type: Boolean},
	ref: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Role",
	}]
}, {
	timestamps: true,
});

module.exports = mongoose.model('User', User)