const express = require('express');
const router = express.Router();

const fitnessController = {
	index: async (req, res) => {
		try {
			res.json(fitness / index);
		} catch (err) {
			console.log(err);
		}
	}
};

module.exports = fitnessController;
