const express = require('express');
const router = express.Router();

const Poll = require('./model/Poll');

router.route('/')
  .get((req, res, next) => {
    Poll.find((err, polls) => {
      if (err) res.send(err);
      res.json(polls);
    })
  })
  .post((req, res, next) => {
    var poll = new Poll();
    poll.user = req.body.user;
    poll.title = req.body.title;
    poll.polls = req.body.polls;

    poll.save(err => {
      if (err) res.send(err);
      res.json({ message: 'Data saved' });
      res.redirect("index");
    });
  })

module.exports = router;