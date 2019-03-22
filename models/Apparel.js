const mongoose = require('../db/connections.js');
const Schema = mongoose.Schema;

const ApparelSchema = new Schema({
	name: String,
	size: Number,
	image: String,
	price: Number,
	description: String
});

module.exports = mongoose.model('Apparel', ApparelSchema);
