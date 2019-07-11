var VerifyToken = require('../auth/VerifyToken');

module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', VerifyToken, notes.create);
    // Retrieve all Notes
    app.get('/notes', VerifyToken, notes.findAll, function(req, res){
        res.render('notes/overview', {notes: res.locals.notes, user: res.locals.user});
    });
    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', VerifyToken, notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', VerifyToken, notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', VerifyToken, notes.delete);
}