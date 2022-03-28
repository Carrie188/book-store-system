const express = require('express');
const mongoose = require("mongoose")

//check the port on which your mongoDB databse runs and connect to the database using connect()
mongoose.connect("mongodb://localhost:27017/booksDB");

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

//creating the document
const book = new Book(
    {
        title: "How to be a genius - Mei",
        category: "programming",
        author: "Mei",
        price: 200.99,
        numberInStock: 50,
        numberOfSolds: 25,
        img: "./images/item-3.jpg"
    }
)

book.save((err)=>{
    if(err) {
        console.log(err);
        return;
    }
});
console.log(book);

//Insert Several documents using ModelName.insertMany(array of documents, callback);

//Reading data from the MongoDB database - using find()

Book.find((err, books)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(books);
        //mongoose.connection.close();
    }
})

//Updating the documents

Book.updateOne(
    {
    _id: "61a9649ea76402eaf6cb0f5d"
    },
    {
        title: "Carrie"
    },
    (err)=>{
        if(err) console.log(err);
        else console.log("Successfully updated one document");
    }
)

//Delete one document

Book.deleteOne(
    {
    _id: ""
    },
    
    (err)=>{
        if(err){
            console.log(err);
        }else {
            console.log("Successfully deleted one document");
        }
    }
)
