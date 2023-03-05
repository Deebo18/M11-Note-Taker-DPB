const router = require('express').Router();
const store = require('../db/store');

// GET from "api/notes" and provides all the notes from the database. If error, returns status 500.
router.get('/notes', (req, res) => {
    store
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
});

// POST to "api/notes"  
router.post('/notes', (req, res) => {
    store
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note that has an id equal to req.params.id"
router.delete('/notes/:id', (req, res) => {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
});
  
module.exports = router;
  