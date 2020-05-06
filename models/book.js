const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksShema = new Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
    
});

const Book = mongoose.model("Book",booksShema);

module.exports = Book;