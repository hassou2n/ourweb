/** @format */

import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <section id="footer">
      <footer className="footer container">
        <div className="footerRow row d-flex justify-content-center">
          <div className="col-2 p-3">
            <a href="#contactUs">
              <img
                src="assets/HJLogoFooter.png"
                alt="HJLogoFooter"
                height="50px"
              />
            </a>
          </div>
          <div className="col-4 p-3 ">
            <p>Monthly digest of whats new and exciting from us.</p>
          </div>
          <div className="col-4 p-3">
            <form>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footerNavLink row d-flex justify-content-center border-top ">
          <div className="col-lg-3 col-sm-6 p-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#home" className="nav-link p-0">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#aboutUs" className="nav-link p-0">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#services" className="nav-link p-0">
                  Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#price" className="nav-link p-0">
                  Price
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6 p-3">
            <h5>Information</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  Legal Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  Pages
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6 p-3">
            <h5>Follow us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  Twiter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="##contactUs" className="nav-link p-0">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  Whatsup
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 p-3">
            <h5>Contact us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#contactUs" class="nav-link p-0">
                  <i class="footerIcon fa-solid fa-location-dot"></i> Holland
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" class="nav-link p-0">
                  <i class="footerIcon fa-solid fa-phone"></i> +9876543210
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#contactUs" className="nav-link p-0">
                  <i class="footerIcon fa-solid fa-envelope"></i> info@J&H.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};
