const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Title is required'
  },
  publiched_at: {
    type: Date,
    default: Date.now
  },
  score: {
    type: Number,
    default: 0
  }
})
  

module.exports = mongoose.model('Topic', TopicSchema);