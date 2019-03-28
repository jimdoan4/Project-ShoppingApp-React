const Review = require('../models/Review.js');
const Apparel = require('../models/Apparel.js');

const reviewController = {
	index: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				res.json(apparel.reviews);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const newReview = new Review(req.body);
				apparel.reviews.push(newReview);
				apparel.save().then((apparel) => {
					res.json(newReview);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	},
	show: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const singleReview = apparel.reviews.id(req.params.reviewId);
				res.json(singleReview);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	update: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const updatedReview = apparel.reviews.id(req.params.reviewId);
				updatedReview.set(req.body);
				apparel.save();
				res.json(updatedReview);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	delete: (req, res) => {
		Apparel.findById(req.params.apparelId)
			.then((apparel) => {
				const filterReviews = apparel.reviews.filter((review) => review._id != req.params.reviewId);
				apparel.reviews = filterReviews;
				apparel.save();
				res.json(apparel.reviews);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

module.exports = reviewController;
