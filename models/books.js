const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    pageCount: {
      type: Number,
      // min: 1,
      // required: true,
    },
    publishedDate: {
      date: {
        type: Date,
        //     required: true,
      },
    },
    thumbnailUrl: {
      type: String,
      // required: true,
    },
    shortDescription: {
      type: String,
      // required: true,
    },
    longDescription: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
      // enum: ['PUBLISH', 'DRAFT', 'REMOVED'],
      // required: true,
    },
    authors: {
      type: [String],
      //   required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model('books', booksSchema);

module.exports = Book;
