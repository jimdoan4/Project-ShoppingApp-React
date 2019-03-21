const express = require('express');
const router = express.Router();
// const Home = require('../models/Home.js');

const aboutController = {
	index: async (req, res) => {
		try {
			res.json(about / index);
		} catch (err) {
			console.log(err);
		}
	}
};

module.exports = aboutController;
