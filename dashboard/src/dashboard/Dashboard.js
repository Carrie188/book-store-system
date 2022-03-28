import React, { useState } from "react";
import BooksPanel from "./BooksPanel";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import BookOrderTable from "./BookOrderTable";
import "../styles/Dashboard.css";
import { Route } from "react-router-dom";
import booksdata from "./booksdata";

const Dashboard = (props) => {

  return (
    <div className="panels">
      <div className="panel-books">
        <BooksPanel />
      </div>
      <div className="panel-piechart">
        <h2>Books In Stocks by Category</h2>
        <br />
        <br />
        <br />
        <br />
        <PieChart data={props.data} />
      </div>
      <div className="panel-barchart">
        <h2>Number of books sold by Author</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <BarChart data={props.data} />
      </div>
      <div className="panel-gridtable">
        <h2>Books Order Table</h2>
        {/* allow the user to buy the books */}
        {/* buy books -> numberOfSolds will increase && numberOfStocks will decrease */}
        <BookOrderTable data={props.data} handleInstockUpdate={props.handleInstockUpdate} />
      </div>
    </div>
  );
};

export default Dashboard;
