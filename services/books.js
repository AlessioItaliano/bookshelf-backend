const { Book } = require('../models');

const { HttpError } = require('../helpers');

const getAllBooks = async () => {
  const result = await Book.find({}, '-createdAt -updatedAt').exec();
  return result;
};

const getBookById = async param => {
  const id = param.bookId;

  const result = await Book.findById(id, '-createdAt -updatedAt').exec();

  if (!result) {
    throw new HttpError(404, 'The book does not exist.');
  }

  return result;
};

const createBook = async body => {
  const boookTile = body.title;

  const existingBook = await Book.findOne({ title: boookTile }).exec();

  if (existingBook) {
    throw new HttpError(403, 'The book already exists.');
  }

  const newBook = {
    title: body.title,
    pageCount: body.pageCount,
    // publishedDate: body.publishedDate,
    // thumbnailUrl: body.thumbnailUrl,
    shortDescription: body.shortDescription,
    longDescription: body.longDescription,
    // status: body.status,
    // authors: body.authors,
  };

  const result = await Book.create(newBook);

  return result;
};

const updateBook = async (param, body) => {
  const id = param.bookId;

  const existingBook = await Book.findOne({ _id: id }).exec();

  if (!existingBook) {
    throw new HttpError(
      404,
      'You do not have any book on the shelf to update.'
    );
  }

  const result = await Book.findByIdAndUpdate(existingBook._id, body, {
    new: true,
  }).exec();

  return result;
};

const removeBook = async params => {
  const id = params.bookId;

  const existingBook = await Book.findOne({ _id: id }).exec();
  console.log(existingBook);

  if (!existingBook) {
    throw new HttpError(404, 'You do not have any book to remove.');
  }

  const result = await Book.findByIdAndDelete(existingBook._id);

  return result;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  removeBook,
};
