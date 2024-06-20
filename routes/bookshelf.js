const express = require('express');

const { bookControllers } = require('../controllers');

// const { validateBody } = require('../middlewares');

// const { bookSchemas } = require('../schemas');

const router = express.Router();

router.get('/', bookControllers.getAll);

router.get('/:bookId', bookControllers.getById);

router.post('/', bookControllers.create);

// router.post('/', validateBody(bookSchemas), bookControllers.create);

// router.put('/:bookId', validateBody(bookSchemas), bookControllers.update);

router.delete('/:bookId', bookControllers.remove);

module.exports = router;
