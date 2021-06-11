const Author = require('../models/author.model');

module.exports.findAllAuthor = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong when finding all authors', error: err }));
}

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: 'Something went wrong when finding one author', error: err }));
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json({author:newlyCreatedAuthor}))
        .catch(err => res.json({ message: 'Something went wrong when creating new author', error: err }));
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor }))
        .catch(err => res.json({ message: 'Something went wrong when editing author', error: err }));
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong with deleting existing author', error: err }));
}