const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

router.get('/', (req, res) => {
	Tweet.find({}).then(tweets => {
		res.json(tweets);
	});
});

module.exports = router;
