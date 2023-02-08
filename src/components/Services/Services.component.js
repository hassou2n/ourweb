/** @format */

import React, { useState } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/fontawesome-free-solid";

// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <p className="text">
//       {isReadMore ? text.slice(0, 100) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };

export const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="text-center">
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
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" className="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container mb-5">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" className="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container mb-5">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" className="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="container mb-5">
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 className="card-title">Lorem ispum dolar</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" className="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUsS d-flex align-items-center">
        <div className="container text-center ">
          <div>
            <div className="contactUsSText">
              Lorem ipsum dolor sit actetur. Vitaebero cras purus naes cies sit
            </div>
          </div>
          <div>
            <a className="contactUsSButton" href="#contactUs">
              contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
