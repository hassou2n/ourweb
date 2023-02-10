/** @format */

import React from "react";
import "./Co.css";
import { ContactUs } from "./ContactUs.component";
import { Footer } from "../Footer/Footer.component";

export const Co = () => {
  return (
    <div className="contactUs">
      <div className="container text-center">
        <div className="contactUsTitle">Contact Us</div>
        <div className="container mt-5">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </div>
  );
};
