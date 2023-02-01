/** @format */

import React, { useState } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faArrowRight } from "@fortawesome/fontawesome-free-solid";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="text-center">
          <div>Services</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes
            liberit vitultricies sit dignissim pellentesque. Etiam duis eu
            auctor snjnj amet dola pellentesque.umauriLorem ipsum dolor sit amet
            consectetur. Vitae liberofd cras purus nam. Ultrices{" "}
          </p>
        </div>
        <div class="row container text-align-left ">
          <div class="col-sm-6">
            <div class="container mb-5 ">
              <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 class="card-title">Lorem ispum dolar</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" class="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="container mb-5">
              <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 class="card-title">Lorem ispum dolar</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" class="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="container mb-5">
              <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 class="card-title">Lorem ispum dolar</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" class="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="container mb-5">
              <div class="shadow-sm p-3 mb-5 bg-white rounded">
                <FontAwesomeIcon className="iconServices" icon={faDesktop} />
                <h5 class="card-title">Lorem ispum dolar</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur. Vitaero cr purus naes
                  liberit vitultricies sit dignissim pellamet dolar mwt amwrt
                  doar amet dolaer
                </p>
                <a href="#" class="learnMore">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
