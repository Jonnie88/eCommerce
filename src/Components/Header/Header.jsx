import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
function Header() {
  return (
    <>
      <div className="alert">Free shipping</div>
      <nav className="header">
        <div className="container">
          <NavLink className="logo" to="/">
            Matsmart
          </NavLink>
          <input type="text" placeholder="Search.." />
          <div className="btn-container">
            <button className="btn btn-secondary">
              <BsPerson size={24} /> Login
            </button>
            <button className="btn btn-secondary">Checkout</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
