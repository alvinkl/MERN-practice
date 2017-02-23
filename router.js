const express = require('express');
const router = express.Router();

const Poll = require('./model/Poll');

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
    
    poll.user = req.body.user;
    poll.title = req.body.title;
    
    var promises = req.body.polls.map((item) => {
      return new Promise((resolve, reject) => {
        let polls = { polling: item, count: 0};
        listPolls.push(polls);
        console.log(polls);

        resolve();
      })
    });
    
    Promise.all(promises)
      .then(() => {
        poll.polls = listPolls;

        poll.save(err => {
          if (err) return res.send(err);
          res.json(poll);
        });
        console.log(listPolls)
      })
      .catch(console.error);

  })
  .put((req, res, next) => {
    if (req.body.type == 1) {
      Poll.update({
        _id: req.body.postId,
        "polls._id": req.body.id 
      },
      {
        $inc: { "polls.$.count": 1 }
      }, (err, poll) => {
        if (err) return res.send(err);
        res.send(poll);
      });
    }
  })

router.route('/:userId')
  .get((req, res, next) => {
    Poll.find({ user: req.params.userId }, (err, poll) => {
      if (err) return res.send(err);
      res.json(poll);
    })
  });

router.route('/poll/:pollId')
  .get((req, res, next) => {
    Poll.findOne({ _id: req.params.pollId }, (err, poll) => {
      if (err) return res.send(err);
      res.json(poll);
    })
  })


module.exports = router;