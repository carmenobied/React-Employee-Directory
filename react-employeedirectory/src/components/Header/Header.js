import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">View all employees.
        <br></br>Employee directory table may be reorganised by name, phone, email, office location (country), 
        <br></br>or specific employees may be filtered by their names.</p>
      </div>
    </div>
  )
}

export default Header;