import React from 'react';

const Book = ({book, onDelete}) => {
    return (
        <div className="card mb-3 border-warning mb-3 h-100" style={{maxWidth: "540px"}}>
            <div className="row g-0" style={{margin: "5px"}}>
                <div className="col-md-4" >
                    <span className="position-absolute card-post__category badge rounded-pill bg-warning text-dark">{book.category}</span>
                    <img src={book.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title text-warning">{book.title}</h5>
                    <p className="card-text">Author:{book.author}</p>
                    <p className="card-text">Price:{book.price}</p>
                    <p className="card-text">Instocks:{book.numberInStock}</p>
                    <p className="card-text">Sold: {book.numberOfSolds}</p>
                    <button type="button" className="btn btn-outline-secondary" onClick={()=>onDelete(book)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Book
