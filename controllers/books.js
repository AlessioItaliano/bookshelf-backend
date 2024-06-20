const { ctrlWrapper } = require('../helpers');

const { booksServices } = require('../services');

const getAll = async (_, res) => {
  const result = await booksServices.getAllBooks();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await booksServices.getBookById(req.params);
  res.status(200).json(result);
};

const create = async (req, res) => {
  const result = await booksServices.createBook(req.body);
  res.status(201).json(result);
};

const update = async (req, res) => {
  const result = await booksServices.updateBook(req.params, req.body);
  res.status(200).json(result);
};

const remove = async (req, res) => {
  await booksServices.removeBook(req.params);
  res.status(200).json({ message: 'Book is deleted' });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  create: ctrlWrapper(create),
  update: ctrlWrapper(update),
  remove: ctrlWrapper(remove),
};
