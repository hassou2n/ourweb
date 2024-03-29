/** @format */

import React from "react";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section id="aboutUs" className="aboutUs">
      <div className="aboutUsRow row container text-align-left">
        <div className="col-lg-6">
          <div>
            <div className=" p-3 mb-5  ">
              <div className="title">About Us</div>
              <p className="pa card-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae libero cras
                  purus naes liberit vitultricies sit dignissim pellentesque.
                  Etiam duis eu auctor snjnj amet dola pellentesque.umauriLorem
                  ipsum dolor sit amet consectetur. Vitae liberofd cras purus
                  nam. Ultrices libero sit vitae ultricies sit dignissim
                  pellentesque. Etiam duis eu auctor pellentesque. Eu mauriLorem
                  ipsum dolor sit amet cconsectetur. Vitae libero cras purus
                  nam. Ultrices libero sit vitae ultricies sit dignissim
                  pellentesque. Etiam duis eu auctor
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae libero cras
                  purus naes liberit vitultricies sit dignissim pellentesque.
                  Etiam duis eu auctor snjnj amet dola pellentesque.umauriLorem
                  ipsum dolor sit amet consectetur. Vitae liberofd cras purus
                  nam. Ultrices libero sit vitae ultricies sit dignissim
                  pellentesque. Etiam duis eu auctor pellentesque. Eu mauriLorem
                  ipsum
                </p>
                <a href="#contactUs" className="readMore">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="containerImg col-lg-6">
          <div>
            <div className="p-3 mb-5 ">
              <img
                className="card-img-top"
                src="./assets/toman.png"
                alt="Card imag cap"
                height="619px"
                width="555px"
              />
              <div className="squareContainer">
                <span>
                  <div>Our Vision</div>
                  <p>
                    Lorem ipsum dolor sit et consectetur. Vitae libero cras
                    purus naes lib
                  </p>
                  <a href="#" className="learnMore">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </span>
                <span>
                  <div>Our Mission</div>
                  <p>
                    Lorem ipsum dolor sit et consectetur. Vitae libero cras
                    purus naes liberitg vitultricies sit digni
                  </p>
                  <a href="#" className="learnMore">
                    Learn more <i class="bi bi-arrow-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
