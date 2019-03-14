//dependencies
const path = require('path');
const router = require('express').Router();

const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

console.log(`this is outes/index.js`);

// `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

// if no api routes are hit, send it to react app
router.use((req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

module.exports = router;