const Apparel = require('../models/Apparel.js');

const apparelController = {
	index: (req, res) => {
		Apparel.find()  // Find all of the apparels from the database
			.then((apparels) => {
				console.log(apparels);
				res.json(apparels);
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newApparel = req.body;  // create a new Apparel, let Mongoose give the default values
			const savedApparel = await Apparel.create(newApparel);
			res.json(savedApparel);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const apparelId = req.params.apparelId;
			const apparel = await Apparel.findById(apparelId);
			res.json(apparel);  // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const apparelId = req.params.apparelId;
			const updatedApparel = req.body;
			const savedApparel = await Apparel.findByIdAndUpdate(apparelId, updatedApparel);
			res.json(savedApparel); // Send the updated information back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const apparelId = req.params.apparelId;
			await Apparel.findByIdAndRemove(apparelId); // Delete the information from the database
			res.json({
				msg: `Successfully Deleted ${apparelId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	}
};

module.exports = apparelController;
