const Apparel = require('../models/Apparel.js');

const apparelController = {
	index: (req, res) => {
		Apparel.find()
			.then((apparels) => {
				console.log(apparels);
				res.json(apparels);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	create: async (req, res) => {
		try {
			const newApparel = req.body;
			const savedApparel = await Apparel.create(newApparel);
			res.json(savedApparel);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	show: async (req, res) => {
		try {
			const apparelId = req.params.apparelId;
			const apparel = await Apparel.findById(apparelId);
			res.json(apparel);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	update: async (req, res) => {
		try {
			const apparelId = req.params.apparelId;
			const updatedApparel = req.body;
			const savedApparel = await Apparel.findByIdAndUpdate(apparelId, updatedApparel);
			res.json(savedApparel);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const apparelId = req.params.apparelId;
			await Apparel.findByIdAndRemove(apparelId);
			res.json({
				msg: `Successfully Deleted ${apparelId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = apparelController;
