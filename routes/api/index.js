//dependencies
const router = require('express').Router();
const bookRoutes = require('./books');

//Book routes
router.use('/books', bookRoutes);

console.log(`this is the routes/api/index.js`)

module.exports = router;