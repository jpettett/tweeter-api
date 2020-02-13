const express = require('express');
const tweetController = require('./controllers/tweet');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/tweets', tweetController);

app.listen(4000, () => {
	console.log('app listening on 4000');
});
