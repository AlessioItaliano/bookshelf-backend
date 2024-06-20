const express = require('express');

const { bookControllers } = require('../controllers');

const { validateBody } = require('../middlewares');

const { bookSchema } = require('../schemas');

const router = express.Router();

router.get('/', bookControllers.getAll);

router.get('/:bookId', bookControllers.getById);

router.post('/', validateBody(bookSchema), bookControllers.create);

router.put('/:bookId', validateBody(bookSchema), bookControllers.update);

router.delete('/:bookId', bookControllers.remove);

module.exports = router;
