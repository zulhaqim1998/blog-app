var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

var BlogPost = module.exports = mongoose.model('BlogPost', PostSchema);
