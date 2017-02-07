'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollsSchema = new Schema({
  polling: String,
  count: Number
});

var Polls = mongoose.model('Polls', PollsSchema);

module.exports = {Polls, PollsSchema};
