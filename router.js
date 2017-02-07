const express = require('express');
const router = express.Router();

const Poll = require('./model/Poll');
const { Polls } = require('./model/Polls');

router.route('/')
  .get((req, res, next) => {
    Poll.find((err, polls) => {
      if (err) return res.send(err);
      res.json(polls);
    })
  })
  .post((req, res) => {
    var poll = new Poll();

    var listPolls = [];    
    var reqPolls = JSON.parse(req.body.polls);

    reqPolls.map((item) => {
      let polls = new Polls();
      polls.polling = item.polling;
      polls.count = item.count;
      
      poll.save(err => {
        if (err) return res.send(err);
      }).then(listPolls.push(polls));
    });

    poll.user = req.body.user;
    poll.title = req.body.title;
    poll.polls = listPolls;

    poll.save(err => {
      if (err) return res.send(err);
      res.json({ message: 'Data saved' });
    });

  })

module.exports = router;