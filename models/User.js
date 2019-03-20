const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	userName: String,
	password: String,
	email: String,
	age: Number,
	gender: String
});

module.exports = mongoose.model('User', UserSchema);
