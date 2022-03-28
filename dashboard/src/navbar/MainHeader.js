import React from 'react'
import { NavLink } from "react-router-dom";
import "../styles/MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/add-new-book">
              Add Book
            </NavLink>
          </li>
          <li>
            {/* To Add New Book Or Remove Existing Book from the book shop */}
            <NavLink activeClassName="active" to="/manage-book">
              Manage Book
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
