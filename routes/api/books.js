//dependencies
const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Add the following Express routes for your app:
// * `/api/books` (get) - Should return all saved books as JSON.
// * `/api/books` (post) - Will be used to save a new book to the database.

// Routes for '/api/books'
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

// `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

// Routes for '/api/books/:id
router.route('/:id')
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;