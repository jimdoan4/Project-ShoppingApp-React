const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	title: String,
	description: String
});

// const CartSchema = new Schema({
// 	cartItem: Number
// })

const ApparelSchema = new Schema({
	name: String,
	size: String,
	image: String,
	price: Number,
	description: String,
	reviews: [ ReviewSchema ],
	// carts: [ CartSchema ],
});

const UserSchema = new Schema({
	userName: String,
	password: String
});

module.exports = {
	ApparelSchema: ApparelSchema,
	ReviewSchema: ReviewSchema,
	// CartSchema: CartSchema,
	UserSchema: UserSchema
};
