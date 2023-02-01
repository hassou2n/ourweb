/** @format */

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/fontawesome-free-solid";
export const Footer = () => {
  return (
    <section id="footer">
      <footer class="footer container">
        <div class="row d-flex justify-content-center">
          <div class="col-2 p-3">
            <a href="">
              <img
                src="assets/HJLogoFooter.png"
                alt="HJLogoFooter"
                height="50px"
              />
            </a>
          </div>
          <div class="col-4 p-3 ">
            <p>Monthly digest of whats new and exciting from us.</p>
          </div>
          <div class="col-4 p-3">
            <form>
              <div class="d-flex w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="footerNavLink row d-flex justify-content-center border-top ">
          <div class="col-lg-3 col-sm-6 p-3">
            <h5>Company</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Services
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Price
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-sm-6 p-3">
            <h5>Information</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Legal Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Terms and Conditions
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Pages
                </a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-sm-6 p-3">
            <h5>Follow us</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Twiter
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Instagram
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Whatsup
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-6 p-3">
            <h5>Contact us</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  <FontAwesomeIcon
                    className="iconFooter"
                    icon={faLocationArrow}
                  />
                  Lorem ipsum dolor sit amet amrt
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  <FontAwesomeIcon className="iconFooter" icon={faPhone} />
                  +9876543210
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0">
                  <FontAwesomeIcon className="iconFooter" icon={faEnvelope} />
                  info@J&H.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex justify-content-center border-top">
          <p>© 2021 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};
