const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!!!"],
        minlength: [3, "Need at least 3 characters for the author"],
    },

})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;