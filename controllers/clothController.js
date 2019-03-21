const express = require('express');
const router = express.Router();
// const users = express.Router();
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const Cloth = require('../models/Cloth.js');

const clothController = {
	index: async (req, res) => {
		try {
			const clothes = await Cloth.find({});
			res.json(clothes);
		} catch (err) {
			console.log(err);
		}
	},
	show: async (req, res) => {
		try {
			const clothId = req.params.id;
			const clothes = await Cloth.findById(clothId);
			res.json(clothes);
		} catch (err) {
			console.log(err);
			res.json(err);
		}
	},
	create: async (req, res) => {
		try {
			const newCloth = req.body;
			const savedCloth = await Cloth.create(newCloth);
			res.json(savedCloth);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	update: async (req, res) => {
		try {
			const clothId = req.params.id;
			const updatedCloth = req.body;
			const savedCloth = await Cloth.findByIdAndUpdate(clothId, updatedCloth);
			res.json(savedCloth);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},
	delete: async (req, res) => {
		console.log('DELETE');
		try {
			const clothId = req.params.id;
			const deletedCloth = await Cloth.findByIdAndRemove(clothId);
			res.json(deletedCloth);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	}
};

module.exports = clothController;
