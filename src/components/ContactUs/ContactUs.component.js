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
        "service_l1gfwpi",
        "template_pjsdh7d",
        form.current,
        "JNTumgYcodetCGPJb"
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
    <section id="contactUs">
      <div className="container">
        {isSubmit ? (
          <MessageDone />
        ) : (
          <div>
            <div className="container text-center">
              <h1 className="titleContactUs">Get In Touch</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Ultrices sem tincidunt
                risus amet sagittis arcu risus. Erat lectus ut at fermentum
                ultricies euismod amet quam. Viverra ultrices accumsan sit sit
                eu. Egestas enim vulputate euismod at cras id morbi.
              </p>
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
                    name="from_email"
                    placeholder="Your Phone"
                    required
                  />
                  <input
                    className="mb-4"
                    type="text"
                    name="from_email"
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
    </section>
  );
};
