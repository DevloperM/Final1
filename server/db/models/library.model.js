const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema(
  {
    show: {
      type: String,
      required: true,
      trim: true
    },
    publisher: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Library = mongoose.model('Task', librarySchema);

module.exports = Task;
