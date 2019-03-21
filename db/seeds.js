require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const User = require('../models/User');
const Cloth = require('../models/Cloth');

const jean = new Cloth({
	name: 'Slacks Jeans',
	size: 32,
	image: 'img',
	price: 50,
	description: 'Skinny Fit Jeans',
	category: 'Men'
});

const jim = new User({
	firstName: 'Jim',
	lastName: 'Doan',
	userName: 'jimdoan4',
	password: 'happy',
	email: 'jimdoan@icloud.com',
	age: 30,
	gender: 'male'
});

User.remove({})
	.then(() => jim.save())
	.then(() => console.log('Successful Save'))
	.then(() => mongoose.connection.close());
