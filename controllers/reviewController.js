const Review = require('../models/Review.js');
const Apparel = require('../models/Apparel.js');

const reviewController = {
	index: (req, res) => {
		Apparel.findById(req.params.apparelId)  // Find all of the reviews from the database
			.then((apparel) => {
				res.json(apparel.reviews);
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
	},
	create: (req, res) => {
		Apparel.findById(req.params.apparelId) // create a new Review, let Mongoose give the default values
			.then((apparel) => {
				const newReview = new Review(req.body);
				apparel.reviews.push(newReview);
				apparel.save().then((apparel) => {
					res.json(newReview);
				});
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	show: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const singleReview = apparel.reviews.id(req.params.reviewId);
				res.json(singleReview);  // Show the information requested
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	update: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const updatedReview = apparel.reviews.id(req.params.reviewId);
				updatedReview.set(req.body);
				apparel.save();
				res.json(updatedReview); // Send the updated information back to the client
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	delete: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const filterReviews = apparel.reviews.filter((review) => review._id != req.params.reviewId);  // Delete the information from the database
				apparel.reviews = filterReviews;
				apparel.save();
				res.json(apparel.reviews);
			})
			.catch((err) => {
				console.log(err); // If there is any error, tell the client something went wrong on the server
			});
	}
};

module.exports = reviewController;
