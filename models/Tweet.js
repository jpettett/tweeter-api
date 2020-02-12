const mongoose = require('../db/connections');

const TweetSchema = new mongoose.Schema(
	{
		name: String,
		tweet: String
	},
	{ timestamps: true }
);

const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;
