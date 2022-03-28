import React from 'react';
import { useState } from 'react';


const AddBook = ({onAdd, newBook}) => {
const [newbook, setnewbook] = useState(newBook)
    const handleChange = (e) =>{
        //e.preventDefault();
        const target = e.target;
        console.log(e.target);

        if(target.id === "title") 
        newBook.title = target.value;
        if(target.id === "image") 
        newBook.img = target.value;
        if(target.id === "author") 
        newBook.author = target.value;
        if(target.id === "price") 
        newBook.price = target.value;
        if(target.id === "numberOfInstock") 
        newBook.numberInStock = target.value;
        if(target.id === "numberOfSold") 
        newBook.numberOfSolds = target.value;
        if(target.id === "category") 
        newBook.category = target.value;
        
        console.log(newBook);

    }

   

    return (
        <div fluid="fluid" className="main-content-container px-4 pb-4" style={{margin:"10px"}}>
            <h1 className="page-header py-4 text-warning">Add New Book</h1>
            <form action="/add-new-book" onSubmit={(e)=>onAdd(e)}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Book Title</label>required
                <input type="text" className="form-control" id="title" placeholder="Book Title" required onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Book Cover</label>
                <input className="form-control" type="file" id="image" name="image"  onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author:</label>
                <input type="text" className="form-control" id="author" placeholder="Book Author" required="required" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="categoriesList" className="form-label">Category:</label>
                <select className="form-select" aria-label="categoriesList" id="category" onChange={handleChange}>
                    <option value="Programming" defaultValue>Programming</option>
                    <option value="Novel">Novel</option>
                    <option value="Story">Story</option>
                    <option value="Science">Science</option>
                    <option value="Horror">Horror</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input type="number" className="form-control" id="price" placeholder="Book Price" required="required" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="numberOfInstock" className="form-label">Instock Number:</label>
                <input type="number" className="form-control" id="numberOfInstock" placeholder="Instock Number" required="required" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="numberOfSold" className="form-label">Sold Number:</label>
                <input type="number" className="form-control" id="numberOfSold" placeholder="Sold Number" required="required" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-outline-warning" >Add New Book</button>
            </form>
        </div>
    )
}

export default AddBook
