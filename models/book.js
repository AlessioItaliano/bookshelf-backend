const mongoose = require('mongoose');
const { isURL } = require('validator');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      min: 1,
      max: 9999,
      default: 1,
      required: true,
    },
    publishedDate: {
      date: {
        type: Date,
        required: true,
      },
    },
    thumbnailUrl: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return isURL(v, {
            protocols: ['http', 'https'],
            require_protocol: true,
          });
        },
        message: 'Book URL must be valid URL!',
      },
    },
    shortDescription: {
      type: String,
      minLength: 1,
      maxLength: 50,
      required: true,
    },
    longDescription: {
      type: String,
      minLength: 1,
      maxLength: 300,
      required: true,
    },
    status: {
      type: String,
      enum: ['PUBLISH', 'DRAFT', 'REMOVED'],
      default: 'PUBLISH',
    },
    authors: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: 'There must be at least one author.',
      },
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
