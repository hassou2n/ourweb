/** @format */

import { useState } from "react";
import "./Navbar.css";
import { MobileNavbar } from "./MobileNavbar/Mobile.component";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src="assets/HJLogo.png" alt="HJLogo" width="50px" />
        </Link>
        <button
          type="button"
          className={`mobile-open-button ${isMobileNavOpen ? "open" : ""}`}
          onClick={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
        >
          {isMobileNavOpen ? (
            <div className="_2_1Hw _1XNn4">
              <div className="_2x2ES _3SfeL _2Gsgc"></div>
              <div className="_2x2ES _2vsXM"></div>
              <div className="_2x2ES _3SfeL _24e0Q"></div>
            </div>
          ) : (
            <div className="_2_1Hw">
              <div className="_2x2ES _3SfeL _2Gsgc"></div>
              <div className="_2x2ES _2vsXM"></div>
              <div className="_2x2ES _3SfeL _24e0Q"></div>
            </div>
          )}
        </button>
        <MobileNavbar
          open={isMobileNavOpen}
          handleMobile={setIsMobileNavOpen}
        />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-uppercase ">
            <li class="nav-item">
              <Link className="nav-link" to="/" smooth>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/" smooth>
                About us
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/" smooth>
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/" smooth>
                Price
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/" smooth>
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/" smooth>
                Pages
              </Link>
            </li>
            <li class="nav-item">
              <Link className="ContactUsButton nav-link" to="/contactUs" smooth>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
