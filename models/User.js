const mongoose = require('../db/connections.js');
const Schema = mongoose.Schema;
// const mongoose = require('mongoose');

const UserSchema = new Schema({
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);

// module.exports = User = mongoose.model('User', UserSchema);
