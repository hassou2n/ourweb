/** @format */

import React from "react";
import "./Services.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDesktop } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="servicesText text-center">
          <div className="title">Services</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes
            liberit vitultricies sit dignissim pellentesque. Etiam duis eu
            auctor snjnj amet dola pellentesque.umauriLorem ipsum dolor sit amet
            consectetur. Vitae liberofd cras purus nam. Ultrices{" "}
          </p>
        </div>
        <div className="row container text-align-left ">
          <div className="col-sm-6">
            <div className="container mb-5 ">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                {/* <FontAwesomeIcon className="iconServices" icon={faDesktop} /> */}
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#contactUs" className="learnMore">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container mb-5">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                {/* <FontAwesomeIcon className="iconServices" icon={faDesktop} /> */}
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#contactUs" className="learnMore">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container mb-5">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                {/* <FontAwesomeIcon className="iconServices" icon={faDesktop} /> */}
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#contactUs" className="learnMore">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container mb-5">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                {/* <FontAwesomeIcon className="iconServices" icon={faDesktop} /> */}
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#contactUs" className="learnMore">
                  Learn more <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUsS d-flex align-items-center">
        <div className="container text-center ">
          <div>
            <div className="contactUsSText">Lorem ipsum dolor sit actetur.</div>
          </div>
          <div>
            <Link className="contactUsSButton" to="contactUs">
              contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
