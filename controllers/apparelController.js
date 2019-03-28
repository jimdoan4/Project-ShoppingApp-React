const Apparel = require('../models/Apparel.js');

const apparelController = {
    index: (req, res) => {
       Apparel
            .find()
            .then((apparels) => {
                console.log(apparels)
                res.json(apparels)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    create: async (req, res) => {
        try {
            const newApparel = req.body
            const savedApparel = await Apparel.create(newApparel)
            res.json(savedApparel)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    show: async (req, res) => {
        try {
            const apparelId = req.params.apparelId
            const apparel = await Apparel.findById(apparelId)
            res.json(apparel)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    update: async (req, res) => {
        try {
            const apparelId = req.params.apparelId
            const updatedApparel = req.body
            const savedApparel = await Apparel.findByIdAndUpdate(apparelId, updatedApparel)
            res.json(savedApparel)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const apparelId = req.params.apparelId
            await Apparel.findByIdAndRemove(apparelId)
            res.json({
                msg: `Successfully Deleted ${apparelId}`
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = apparelController

// module.exports = router;

// router.get('/', (req, res) => {
// 	Apparel.find()
// 		.then((apparels) => {
// 			res.json(apparels);
// 		})
// 		.catch((err) => console.log(err));
// });

// router.post('/', (req, res) => {
// 	const newApparel = new Apparel(req.body.apparel);
// 	newApparel
// 		.save()
// 		.then((apparel) => {
// 			res.json(apparel);
// 		})
// 		.catch((err) => console.log(err));
// });

// router.get('/:apparelId', (req, res) => {
// 	Apparel.findById(req.params.apparelId)
// 		.then((apparel) => {
// 			const apparelId = (req.params.apparelId)
// 			apparel.reviews = apparel.reviews.reverse();
// 			res.json(apparel);
// 		})
// 		.catch((err) => console.log(err));
// });

// router.post('/:apparelId/reviews', (req, res) => {
// 	Apparel.findById(req.params.apparelId).then((apparel) => {
// 		const newReview = new Review({});
// 		apparel.reviews.push(newReview);

// 		apparel.save().then((apparel) => {
// 			res.json(newReview);
// 		});
// 	});
// });

// router.delete('/:apparelId/reviews/:reviewId', (req, res) => {
// 	Apparel.findById(req.params.apparelId).then((apparel) => {
// 		const filteredReview = apparel.reviews.filter((review) => review._id.toString() !== req.params.reviewId);

// 		apparel.reviews = filteredReview;

// 		apparel.save().then((apparel) => {
// 			apparel.reviews = apparel.reviews.reverse();
// 			res.json(apparel.reviews);
// 		});
// 	});
// });

// router.patch('/:apparelId/reviews/:reviewId', (req, res) => {
// 	Apparel.findById(req.params.apparelId).then((apparel) => {
// 		const update = req.body.review;
// 		const review = apparel.reviews.id(req.params.reviewId);
// 		if (update.title) {
// 			review.title = update.title;
// 		}
// 		if (update.description) {
// 			review.description = update.description;
// 		}

// 		apparel.save().then((apparel) => {
// 			apparel.reviews = apparel.reviews.reverse();
// 			res.json(apparel);
// 		});
// 	});
// });