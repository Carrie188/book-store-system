import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const GridTable = (props) => {
  const booksdata = props.data;
  const submitHandle = props.handleInstockUpdate;
  // const [quantity, setquantity] = useState(0);
  let quantity = 0;
  const handleChange = (e) =>{
    console.log("input quantity:"+e.target.value);
    quantity = e.target.value;
    console.log("input quantity:"+quantity);
   
    
    
  }

  

  return (
    <div>
      <p>
        {" "}
        There are {booksdata.length} books in the system. User can only buy
        books at this page.
      </p>
      <br />
      <table className="table table-striped">
        <thead>
          <tr style={{ backgroundColor: "#F3C969" }}>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Stocks</th>
            <th scope="col">Action</th>
            <th scope="col">Sales</th>
          </tr>
        </thead>
        <tbody>
          {booksdata.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
              <td>
                {book.numberInStock !== 0 ? book.numberInStock : "Out of Stock"}
              </td>
              <td>
                <form onSubmit={()=>submitHandle(book, quantity)}>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="10"
                    onChange={handleChange}
                  />
                  <button
                    name="submit"
                    style={{
                      margin: "5px",
                      borderRadius: "10px",
                      backgroundColor: "#FFF5B2",
                    }}
                    >
                    Buy
                  </button>
                </form>
              </td>
              <td>{book.numberOfSolds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GridTable;
