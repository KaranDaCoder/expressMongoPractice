const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Movie title is compulsory!'],
    trim: true,
  },

  year: {
    type: String,
    required: [true, 'Movie release year is required!'],
  },

  cast: {
    type: String,
    default: 'nana, rana , dana',
  },

  isHit: {
    type: Boolean,
    required: [true, 'Is that movie hit?'],
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
