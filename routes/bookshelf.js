const express = require('express');

const { bookControllers } = require('../controllers');

const { validateBody } = require('../middlewares');

const { bookSchema } = require('../schemas');

const router = express.Router();

router.get('/', bookControllers.getAll);

router.get('/:bookId', bookControllers.getById);

router.post('/', validateBody(bookSchema.bookSchema), bookControllers.create);

router.put(
  '/:bookId',
  validateBody(bookSchema.bookSchema),
  bookControllers.update
);

router.delete('/:bookId', bookControllers.remove);

module.exports = router;
