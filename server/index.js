const express = require("express");
const path = require('path')
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");  // for upload image file

const Book = require("./models/books.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
const url = "mongodb://localhost:27017/booksDB";

//define storage for the images
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        console.log('got file', file)
        callback(null, path.join(__dirname + "/uploads/images"));
    },
    //add back the extension
    filename: function(request, file, callback){
        callback(null, Date.now() + file.originalname);
    }
});

// upload parameter for multer
const upload = multer({
    storage: storage,
    limits: {
        fieldNameSize: 1024 *  1024 * 3,
    }
})



//READ OPERATION
app.get("/api/books", async (req,res)=>{

    try{
        await mongoose.connect(url);
        console.log("Database connected");
        Book.find((err, books)=>{
            if(err) console.log(err);
            else {
                console.log(books);
                res.send(books);
                mongoose.connection.close();
            }
        })
    }
    catch(error){
        console.log(error);
    }
   
})
//CREATE DATA
app.post("/api/addbook", upload.single("image"), async (req,res)=>{
    try{
        
        const {title, category, author, price, numberInStock, numberOfSolds, img} = req.body;
        // console.log("file log is :")
        // console.log(req.file);
        // debug the request data here
        console.log(title, category, author, price, numberInStock, numberOfSolds, img);
        const newBook = new Book({
            title: title,
            category: category,
            author: author,
            price: price,
            numberInStock: numberInStock,
            numberOfSolds: numberOfSolds,
            img: "./images/item-2.jpg"   //default image
        });

        await mongoose.connect(url);
        console.log("Database connected");
        newBook.save((err)=>{
           if(err){
               console.log(err);
               res.send(err);
           }
           else{
                console.log("The document inserted successfully");
                res.send(newBook);
                mongoose.connection.close();
           }
       });
    }
    catch(error){
        console.log(error);
    }
})

//UPDATE DATA
app.put("/api/books/:id", async (req,res)=>{
    try{
           let _id = req.params.id;
           _id = mongoose.Types.ObjectId(_id);
           console.log(_id);

           const {title, category, author, price, numberInStock, numberOfSolds, img} = req.body
           await mongoose.connect(url);
            console.log("Database connected");
           Book.updateOne(
               {_id: _id},
               {
                   title: title,
                   category: category,
                   author: author,
                   price: price,
                   numberInStock: numberInStock,
                   numberOfSolds: numberOfSolds,
                   img: img
                },
                (err)=>{
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                    else{
                         console.log("The document updated successfully");
                         res.send("The document updated successfully");
                         mongoose.connection.close();
                    }
                });
        }
    catch(error){
        console.log(error);
    }
});

//DELETE DATA
app.delete("/api/books/:id", async (req,res)=>{
    try{
           let _id = req.params.id;
           _id = mongoose.Types.ObjectId(_id);
           console.log(_id);

         
           await mongoose.connect(url);
            console.log("Database connected");
           Book.deleteOne(
               {_id: _id},
               (err)=>{
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                    else{
                         console.log("The document deleted successfully");
                         res.send("The document deleted successfully");
                         mongoose.connection.close();
                    }
                });
        }
    catch(error){
        console.log(error);
    }
});



app.listen(3003, ()=>{
    console.log("the server is up and listening on port 3003");
})