'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  user: String,
  title: String,
  polls: [{
    polling: String,
    count: Number
  }]
});

module.exports = mongoose.model('Poll', PollSchema);
