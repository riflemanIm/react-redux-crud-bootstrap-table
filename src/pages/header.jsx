import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const Header = () => {
  return (
    <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
      <div className="container">
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link"
              exact
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              exact
              activeClassName="active"
              to="/customers"
            >
              Customers
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              activeClassName="active"
              to="/invoices"
            >
              Invoices
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
