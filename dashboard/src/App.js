import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
// import Books from "./pages/Products";
import MainHeader from "./navbar/MainHeader";
// import BookDetail from "./pages/ProductDetail";
import booksdata from "./dashboard/booksdata";
import BooksList from "./managebook/BooksList";
import Book from "./managebook/Book";
import AddBook from "./managebook/AddBook";



function App() {
  // const [books, setBooks] = useState(booksdata);
  const [books, setbooks] = useState([]);
  const [newBook, setnewBook] = useState({
    title: "",
    category: "",
    author: "",
    price: 0,
    numberInStock: 0,
    numberOfSolds: 0,
    img: "",

  });
  // initialize data
 useEffect(()=>{
   axios
    .get("http://localhost:3003/api/books")
    .then(resp=>{
      console.log(resp,resp.data);
      setbooks(resp.data);
    })
    .catch(err=>{
      console.log(err);
    })

 },[]);


 






 //handle add event
const handleAdd = async(e)=>{
  e.preventDefault();
    const {data} = await axios.post("http://localhost:3003/api/addbook", newBook);
    console.log(data);
    if(typeof data === 'object'){
      const book = data;
      console.log(book);
      const newBooks = [...books, book];
      setbooks([...newBooks]);
      alert("Add new book successfully!")
    
      // props.history.push('/manage-book');


    }
    else{
      alert("Add new book failed!")
      console.log("Can not add object");
    }
    
}

//handle delete event

const handleDelete = async (book)=>{
  console.log("Delete handled");
  const {data} = await axios.delete("http://localhost:3003/api/books/"+book._id);
  const newBooks = books.filter(b=>b._id !== book._id);
  
  console.log(data, newBooks);
  setbooks([...newBooks]);
}

//handle update instock event
const handleInstockUpdate = async (book, quantity)=>{
  
  console.log("Update Handled");
  book.numberInStock = book.numberInStock - parseInt(quantity);
  book.numberOfSolds = book.numberOfSolds + parseInt(quantity);
  console.log("updated sold: "+book.numberOfSolds);
  console.log("updated instock: "+book.numberInStock);
  console.log(book);
  const {data} = await axios.put("http://localhost:3003/api/books/"+book._id, book);
  const index = books.indexOf(book);
  books[index] = {...book};
  console.log(books);
  setbooks([...books]);
 }


  // const handleStockSale = (bookOrdered, quantity) => {
  //   // if (isNaN(parseInt(quantity))) return;
  //   // const newbooks = [...books];
  //   // const book = newbooks.find((book) => book.id === bookOrdered.id);
  //   // if (parseInt(quantity) > book.numberInStock) return;
  //   // const index = newbooks.indexOf(book);
  //   // newbooks[index].numberInStock -= parseInt(quantity);
  //   // newbooks[index].numberOfSolds += parseInt(quantity);
  //   // // console.log(newbooks[index].numberInStock);
  //   // // console.log(newbooks[index].numberOfSolds);
  //   // setBooks(newbooks);
  // };

  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Dashboard data={books} handleInstockUpdate={handleInstockUpdate} />
          </Route>
          <Route path="/add-new-book"><AddBook newBook={newBook} onAdd={handleAdd}/>   </Route>
          <Route path="/manage-book"><BooksList books={books} onDelete={handleDelete} /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
