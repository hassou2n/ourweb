/** @format */

import React from "react";
import "./MessageDone.css";

export const MessageDone = () => {
  return (
    <div className="MessageDone container text-center">
      <div className="row align-items-center">
        <div className="col">
          <p>
            Your message has been sent.
            <br />
            Thank you! We will get back to you as soon as I can.
          </p>

          <p className="MessageDoneButton">
            <a href="https://hkhaleefah.com/">Go Back!</a>
          </p>
        </div>
      </div>
    </div>
  );
};
