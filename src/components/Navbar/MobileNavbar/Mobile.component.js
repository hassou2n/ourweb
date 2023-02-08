/** @format */

import React from "react";
import PropTypes from "prop-types";
import "./Mobile.css";

export const MobileNavbar = (props) => {
  const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
  return (
    <nav className={isOpenClass}>
      <a
        href="#home"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Home
      </a>
      <a
        href="#aboutUe"
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
      <a
        href="#contactUs"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Contact Us
      </a>
    </nav>
  );
};
MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
};
