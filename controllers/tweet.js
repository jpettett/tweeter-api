const express = require('express');
const router = express.Router();
const Tweet = require('../models/Tweet');

// Get all Tweets //
router.get('/', (req, res) => {
  Tweet.find({}).then(tweets => {
    res.json(tweets);
  });
});

// POST new Tweet //
router.post('/post', (req, res) => {
  const newTweet = req.body;
  Tweet.create(newTweet).then(gif => res.json('/'));
});

// PUT edit tweet //
router.put('/:id', (req, res) => {
  Tweet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(tweet => res.redirect('/'));
});

// DELETE tweet //
router.delete('/:id', (req, res) => {
  Tweet.findOneAndDelete({ _id: req.params.id }).then(tweet =>
    res.redirect('/')
  );
});
module.exports = router;
