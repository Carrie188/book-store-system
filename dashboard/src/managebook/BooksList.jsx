import React from 'react';
import Book from './Book';

const BooksList = ({books, onDelete}) => {
    console.log(books);




    return (
        <div lg="6" sm="12" className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"10px"}}>
            {books.map((book)=>(
                <div className="col" key={book._id}>
                <Book book={book} onDelete={onDelete}/>
                </div>
            ))}
        </div>
    )
}

export default BooksList
