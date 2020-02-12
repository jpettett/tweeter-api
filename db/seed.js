const Tweet = require('../models/Tweet');
const seedData = require('./seeds.json');

Tweet.remove({})
	.then(() => Tweet.collection.insert(seedData))
	.then(() => {
		process.exit();
	});
