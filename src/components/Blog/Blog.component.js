/** @format */

import React from "react";
import "./Blog.css";
import { ReadMore } from "../Action/ReadMore";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/fontawesome-free-solid";

export const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="testmimonialText text-center">
          <div className="title">Testmimonial</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes
            liberit vitultricies sit dignissim pellentesque. Etiam duis eu
            auctor snjnj amet dola pellentesque.umauriLorem ipsum dolor sit amet
            consectetur. Vitae liberofd cras purus nam. Ultrices
          </p>
        </div>
        <div>
          <div className="row container text-align-left">
            <div className="col-lg-4 col-md-4">
              <div className="cardTestmimonial">
                <div className="shadow-sm p-3 mb-5 bg-white ">
                  {/* <FontAwesomeIcon
                    className="iconTestmimonial"
                    icon={faQuoteLeft}
                  /> */}
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectettaerr purus naes liberit
                    vitultricies sit dignipellat dolar mwt amwrt doar amet
                    dolaerLoremm ipsum dolor sit amet consecte
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cardTestmimonial">
                <div className="shadow-sm p-3 mb-5 bg-white ">
                  {/* <FontAwesomeIcon
                    className="iconTestmimonial"
                    icon={faQuoteLeft}
                  /> */}
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectettaerr purus naes liberit
                    vitultricies sit dignipellat dolar mwt amwrt doar amet
                    dolaerLoremm ipsum dolor sit amet consecte
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cardTestmimonial">
                <div className="shadow-sm p-3 mb-5 bg-white ">
                  {/* <FontAwesomeIcon
                    className="iconTestmimonial"
                    icon={faQuoteLeft}
                  /> */}
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectettaerr purus naes liberit
                    vitultricies sit dignipellat dolar mwt amwrt doar amet
                    dolaerLoremm ipsum dolor sit amet consecte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="blogText text-center">
          <div className="title">Blog</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes
            liberit vitultricies sit dignissim pellentesque. Etiam duis eu
            auctor snjnj amet dola pellentesque.umauriLorem ipsum dolor sit amet
            consectetur. Vitae liberofd cras purus nam. Ultrices
          </p>
        </div>
        <div>
          <div className="row container text-align-left">
            <div className="col-lg-4 col-md-4">
              <div className="cardBlog">
                <div className=" p-3 mb-5 ">
                  <img
                    className="card-img-top"
                    src="/assets/man.png"
                    alt="Card imag cap"
                  />
                  <h5 className="card-title">Lorem ispum dolar sit amet</h5>
                  <p className="card-text">
                    <ReadMore>
                      Lorem ipsum dolor sit amet consectetur. Vitaerr purus naes
                      liberit vitultricies sit dignissim pellat dolar mwt amwrt
                      doar amet dolaer
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cardBlog">
                <div className="p-3 mb-5 ">
                  <img
                    className="card-img-top"
                    src="/assets/man.png"
                    alt="Card imag cap"
                  />
                  <h5 className="card-title">Lorem ispum dolar sit amet</h5>
                  <p className="card-text">
                    <ReadMore>
                      Lorem ipsum dolor sit amet consectetur. Vitaerr purus naes
                      liberit vitultricies sit dignissim pellat dolar mwt amwrt
                      doar amet dolaer
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cardBlog">
                <div className=" p-3 mb-5 ">
                  <img
                    className="card-img-top"
                    src="/assets/man.png"
                    alt="Card imag cap"
                  />
                  <h5 className="card-title">Lorem ispum dolar sit amet</h5>
                  <p className="card-text">
                    <ReadMore>
                      Lorem ipsum dolor sit amet consectetur. Vitaerr purus naes
                      liberit vitultricies sit dignissim pellat dolar mwt amwrt
                      doar amet dolaer
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
