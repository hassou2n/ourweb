/** @format */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { MessageDone } from "./MessageDone.component";

export const ContactUs = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7326s6",
        "template_dtvrw4a",
        form.current,
        "clgW0nbcKYKoXfO0T"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      {isSubmit ? (
        <MessageDone />
      ) : (
        <div>
          <div className="container text-center">
            <div className="conInr row justify-content-between pb-8">
              <div className="coBox col-lg-2 col-md-4 border border-dark p-5 m-1">
                <p className="card-text">
                  Lorem ipsum doloramet consectetur anet
                </p>
              </div>

              <div className="coBox col-lg-2 col-md-4 border border-dark  p-5 m-1">
                <p className="card-text">Info@J&H.com</p>
              </div>

              <div className="coBox col-lg-2 col-md-4 border border-dark  p-5 m-1">
                <p className="card-text">+9876543210</p>
              </div>

              <h1 className="titleContactUs">Get In Touch</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Ultrices sem tincidunt
                risus amet sagittis arcu risus. Erat lectus ut at fermentum
                ultricies euismod amet quam. Viverra ultrices accumsan sit sit
                eu. Egestas enim vulputate euismod at cras id morbi.
              </p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-sm-6 mb-5">
                <input
                  className="mb-4"
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                />

                <input
                  className="mb-4"
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                />
                <input
                  className="mb-4"
                  type="number"
                  name="phone"
                  placeholder="Your Phone"
                  required
                />
                <input
                  className="mb-4"
                  type="text"
                  name="service"
                  placeholder="Service"
                  required
                />
              </div>

              <div className="col-sm-6 mb-5">
                <textarea
                  className="mb-4"
                  name="message"
                  placeholder="Your Message"
                  required
                />
                <p className="ContactButton">
                  <input type="submit" value="Send Message" />
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
