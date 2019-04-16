const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	screenName: String,
	title: String,
	description: String
});


const ApparelSchema = new Schema({
	name: String,
	size: String,
	image: String,
	price: Number,
	description: String,
	reviews: [ ReviewSchema ],
});

const UserSchema = new Schema({
	userName: String,
	password: String
});

module.exports = {
	ApparelSchema: ApparelSchema,
	ReviewSchema: ReviewSchema,
	UserSchema: UserSchema
};
