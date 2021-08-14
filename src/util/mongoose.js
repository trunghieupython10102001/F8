module.exports = {
	mongooseArrayToObj: function(mongooseArray) {
		return mongooseArray.map(mongoose => mongoose.toObject())
	},
	mongooseToObject: mongoose => mongoose ? mongoose.toObject() : mongoose
}