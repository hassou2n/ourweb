/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Mobile.css";

export const MobileNavbar = (props) => {
  const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
  return (
    <nav className={isOpenClass}>
      <Link
        href="/"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Home
      </Link>
      <a
        href="#aboutUs"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        About Me
      </a>
      <a
        href="#services"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Services
      </a>
      <a
        href="#price"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Price
      </a>
      <a
        href="#blog"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Blog
      </a>
      <a
        href="#pages"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Pages
      </a>
      <Link
        to="/contactUs"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Contact Us
      </Link>
    </nav>
  );
};
MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
};
