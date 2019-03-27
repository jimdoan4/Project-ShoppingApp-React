const mongoose = require('./connections.js');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	title: {
		type: String,
		default: 'New Title'
	},
	description: {
		type: String,
		default: 'New Description'
	},
	created: {
		type: Date,
		default: new Date()
	}
});

const ApparelSchema = new Schema({
	name: {
		type: String,
		default: 'New Name'
	},
	size: {
		type: String,
		default: 'New Size'
	},
	image: {
		type: String,
		default: 'New Image'
	},
	price: {
		type: Number,
		default: 0
	},
	description: {
		type: String,
		default: 'New Description'
	},
	reviews: [ ReviewSchema ]
});

const UserSchema = new Schema({
	userName: {
		type: String,
		default: 'New Username'
	},
	password: {
		type: String,
		default: 'New Password'
	}
});

module.exports = {
	ReviewSchema: ReviewSchema,
	UserSchema: UserSchema,
	ApparelSchema: ApparelSchema
};
