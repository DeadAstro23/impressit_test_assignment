const router = require('express').Router();
const BookController = require('../../controllers/book_controller');
require('express-group-routes');

const { AddBookValidator, UpdateBookValidator } = require('../../middleware/validators/param_validators');
const validationMW = require('../../middleware/validation_middleware');

const addBookValidator = validationMW(new AddBookValidator());
const updateBookValidator = validationMW(new UpdateBookValidator());

router.group('/v1', (r) => {
  r.get('/books', BookController.getAllBooks);
  r.get('/book/:id', BookController.getBookById);
  r.post('/book', addBookValidator, BookController.addBook);
  r.put('/book/:id', updateBookValidator, BookController.updateBookById);
  r.delete('/book/:id', BookController.deleteBookById);
});

module.exports = router;
