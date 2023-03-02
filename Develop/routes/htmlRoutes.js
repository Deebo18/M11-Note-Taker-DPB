const path = require('path');
const router = require('express').Router();

// All other routes will respond with the index.html in the public folder.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// "/notes" is in relations to the notes.html file in the publich folder.
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..public/notes.html'));
});

module.exports = router;