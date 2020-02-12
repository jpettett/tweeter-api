const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tweeter-api', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

module.exports = mongoose;
