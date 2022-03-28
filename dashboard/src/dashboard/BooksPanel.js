import React from "react";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
import booksdata from "./booksdata";

// https://www.npmjs.com/package/react-dropdown

const BooksPanel = () => {
  return (
    <div>
      <h2>Popular Books</h2>
      {/* if the book is popular, the number in stock < 50, hard to request new stocks */}
      <br />
      {booksdata.map(
        (book) =>
          book.numberInStock < 31 && (
            <div className="book" key={book.id}>
              <img src={book.img} alt={book.author} width="200px" />
              <span className="book-info">
                <h4>{book.title}</h4>
                <p>${book.price}</p>
              </span>
            </div>
          )
      )}
    </div>
  );
};

export default BooksPanel;
