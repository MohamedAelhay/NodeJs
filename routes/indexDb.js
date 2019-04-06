module.exports = (app) => {
    const nodes = require('../controllers/node.js')
    
    // Create a new Note
    app.post('/notes', nodes.create);

    // Retrieve all Notes
    app.get('/notes', nodes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', nodes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', nodes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', nodes.delete);
}

