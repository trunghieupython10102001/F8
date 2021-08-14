const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug)

const Course = new Schema({
	name: { type: String, required: true},
	description: { type: String },
	level: { type: String },
	image: { type: String },
	lesson: { type: Number },
	slug: { type: String, slug: "name", unique: true }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Course', Course)