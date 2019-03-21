const express = require('express');
const router = express.Router();
// const users = express.Router();
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const User = require('../models/User.js');

const userController = {
	index: async (req, res) => {
		try {
			const users = await User.find({});
			res.json(users);
		} catch (err) {
			console.log(err);
		}
	},
	show: async (req, res) => {
		try {
			const userId = req.params.id;
			const users = await User.findById(usersId);
			res.json(users);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	create: async (req, res) => {
		try {
			const newUser = req.body;
			const savedUser = await User.create(newUser);
			res.json(savedUser);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	update: async (req, res) => {
		try {
			const userId = req.params.id;
			const updatedUser = req.body;
			const savedUser = await User.findByIdAndUpdate(userId, updatedUser);
			res.json(savedUser);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		console.log('DELETE');
		try {
			const userId = req.params.id;
			const deletedUser = await User.findByIdAndRemove(userId);
			res.json(deletedUser);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = userController;

// users.use(cors());

// process.env.SECRET_KEY = 'secret';

// users.post('/register', (req, res) => {
// 	const today = new Date();
// 	const userData = {
// 		first_name: req.body.first_name,
// 		last_name: req.body.last_name,
// 		email: req.body.email,
// 		password: req.body.password,
// 		created: today
// 	};

// 	User.findOne({
// 		email: req.body.email
// 	})
// 		.then((user) => {
// 			if (!user) {
// 				bcrypt.hash(req.body.password, 10, (err, hash) => {
// 					userData.password = hash;
// 					User.create(userData)
// 						.then((user) => {
// 							res.json({ status: user.email + ' registered' });
// 						})
// 						.catch((err) => {
// 							res.send('error: ' + err);
// 						});
// 				});
// 			} else {
// 				res.json({ error: 'User already exists' });
// 			}
// 		})
// 		.catch((err) => {
// 			res.send('error: ' + err);
// 		});
// });

// users.post('/login', (req, res) => {
//     User.findOne({
//         email: req.body.email
//     })
//         .then(user) {
//         if (bcrypt.compareSync(req.body.password, user.password)) {
//             const payload = {
//                 _id: user._id,
//                 first_name: user.first_name,
//                 last_name: user.last_name,
//                 email: user.email,
//             }
//             let token = jwt.sign(payload, process.env.SECRET_KEY, {
//                 expiresIn: 1440
//             })
//             res.send(token)
//         } else {
//             res.json({error: 'User does not exist'})
//     }

// module.exports = userController;
