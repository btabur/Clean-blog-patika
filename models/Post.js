const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostShema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Posts', PostShema);

module.exports = Post;