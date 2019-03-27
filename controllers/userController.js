// const express = require('express');
// const User = require('../models/User.js');
// // const Apparel = require('../models/Apparel.js');
// const router = express.Router();

// router.get('/', (req, res) => {
// 	User.find()
// 		.then((users) => {
// 			res.json(users);
// 		})
// 		.catch((err) => console.log(err));
// });

// router.post('/', (req, res) => {
// 	const newUser = new User(req.body.user);

// 	newUser
// 		.save()
// 		.then((user) => {
// 			res.json(user);
// 		})
// 		.catch((err) => console.log(err));
// });

// router.get('/:userId', (req, res) => {
// 	User.findById(req.params.userId)
// 		.then((user) => {
// 			// user.reviews = user.reviews.reverse();
// 			res.json(user);
// 		})
// 		.catch((err) => console.log(err));
// });

// router.post('/:userId/', (req, res) => {
// 	User.findById(req.params.userId).then((user) => {
// 		// const newReview = new Review({});
// 		// user.reviews.push(newReview);

// 		user.save().then((user) => {
// 			res.json(user);
// 		});
// 	});
// });

// router.delete('/:userId/', (req, res) => {
// 	User.findByIdAndDelete(req.params.userId).then((user) => {
// 		// const filteredReview = user.reviews.filter((review) => review._id.toString() !== req.params.Id);

// 		// user.reviews = filteredReview;

// 		// user.save().then((user) => {
// 		// 	user = user.reverse();
// 		res.json(user);
// 	});
// });

// router.patch('/:userId', (req, res) => {
// 	User.findByIdAndUpdate(req.params.userId, req.body, {
// 		new: true
// 	}).then((user) => {
// 		// const update = req.body.review;
// 		// const review = user.reviews.id(req.params.reviewId);
// 		// if (update.title) {
// 		// 	review.title = update.title;
// 		// }
// 		// if (update.description) {
// 		// 	review.description = update.description;
// 		// }

// 		// user.save().then((user) => {
// 		// 	user.reviews = user.reviews.reverse();
// 		res.json(user);
// 	});
// });

// module.exports = router;

// const userController = {
// 	index: async (req, res) => {
// 		try {
// 			const users = await User.find({});
// 			console.log(users);
// 			res.json(users);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	},
// 	show: async (req, res) => {
// 		try {
// 			const userId = req.params.id;
// 			const users = await User.findById(userId);
// 			res.json(users);
// 		} catch (err) {
// 			console.log(err);
// 			res.json(err);
// 		}
// 	},
// 	create: async (req, res) => {
// 		try {
// 			const newUser = req.body;
// 			const savedUser = await User.create(newUser);
// 			res.json(savedUser);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json(err);
// 		}
// 	},
// 	update: async (req, res) => {
// 		try {
// 			const userId = req.params.id;
// 			const updatedUser = req.body;
// 			const savedUser = await User.findByIdAndUpdate(userId, updatedUser);
// 			res.json(savedUser);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json(err);
// 		}
// 	},
// 	delete: async (req, res) => {
// 		console.log('DELETE');
// 		try {
// 			const userId = req.params.id;
// 			const deletedUser = await User.findByIdAndRemove(userId);
// 			res.json(deletedUser);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json(err);
// 		}
// 	}
// };

// module.exports = userController;

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
