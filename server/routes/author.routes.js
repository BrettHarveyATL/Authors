const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthor);
    app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
    app.put('/api/authors/:id/edit', AuthorController.updateExistingAuthor);
    app.post('/api/authors/new', AuthorController.createNewAuthor);
    app.delete('/api/authors/:id/delete', AuthorController.deleteAnExistingAuthor);
}