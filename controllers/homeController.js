const express = require('express');
const router = express.Router();
// const Home = require('../models/Home.js');

const homeController = {
	index: async (req, res) => {
		try {
			res.json(index);
		} catch (err) {
			console.log(err);
		}
	}
};

module.exports = homeController;
