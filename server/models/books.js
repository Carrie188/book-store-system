const mongoose = require("mongoose");


//defining the schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The title is required, please specify one."]
    },
    category: {
        type: String,
        required: [true, "The category is required, please specify one."]
    },
    author: {
        type: String,
        required: [true, "author is missing, please provide the value"]
    },
    price: {
        type: Number,
        min: 1,
        max: 1000,
        required: [true, "price is missing, please provide the value"]
    },
    numberInStock: {
        type: Number,
        min: 1,
        max: 1000,
        required: [true, "numberInStock is missing, please provide the value"]
    },
    numberOfSolds: {
        type: Number,
        min: 1,
        max: 1000,
        required: [true, "numberOfSolds is missing, please provide the value"]
    },
    img: {
        type: String,
        required: [true, "img is missing, please provide the value"]
    }

    
});

//compiling the schema into model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;