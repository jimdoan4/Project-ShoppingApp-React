// const express = require('express');
// const router = express.Router();
// const users = express.Router();
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const Apparel = require('../models/Apparel.js');

const apparelController = {
	index: async (req, res) => {
		try {
			const apparels = await Apparel.find({});
			res.json(apparels);
		} catch (err) {
			console.log(err);
		}
	},
	show: async (req, res) => {
		try {
			const apparelId = req.params.id;
			const apparels = await Apparel.findById(apparelId);
			res.json(apparels);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
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
	update: async (req, res) => {
		try {
			const apparelId = req.params.id;
			const updatedApparel = req.body;
			const savedApparel = await Apparel.findByIdAndUpdate(apparelId, updatedApparel);
			res.json(savedApparel);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		console.log('DELETE');
		try {
			const apparelId = req.params.id;
			const deletedApparel = await Apparel.findByIdAndRemove(apparelId);
			res.json(deletedApparel);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = apparelController;
