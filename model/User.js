'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: String,
  username: String,
  displayName: String
});

module.exports = mongoose.model('User', UserSchema);
