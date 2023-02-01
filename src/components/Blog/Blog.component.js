/** @format */

import React from "react";
import "./Blog.css";
import { ReadMore } from "../Action/ReadMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faSortDown } from "@fortawesome/fontawesome-free-solid";

export const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="testmimonialText text-center">
          <h1>Testmimonial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes
            liberit vitultricies sit dignissim pellentesque. Etiam duis eu
            auctor snjnj amet dola pellentesque.umauriLorem ipsum dolor sit amet
            consectetur. Vitae liberofd cras purus nam. Ultrices
          </p>
        </div>
        <div>
          <div class="row container text-align-left">
            <div class="col-lg-4 col-md-4">
              <div class="cardTestmimonial">
                <div class="shadow-sm p-3 mb-5 bg-white ">
                  <FontAwesomeIcon
                    className="iconTestmimonial"
                    icon={faQuoteLeft}
                  />
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectettaerr purus naes liberit
                    vitultricies sit dignipellat dolar mwt amwrt doar amet
                    dolaerLoremm ipsum dolor sit amet consecte
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="cardTestmimonial">
                <div class="shadow-sm p-3 mb-5 bg-white ">
                  <FontAwesomeIcon
                    className="iconTestmimonial"
                    icon={faQuoteLeft}
                  />
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectettaerr purus naes liberit
                    vitultricies sit dignipellat dolar mwt amwrt doar amet
                    dolaerLoremm ipsum dolor sit amet consecte
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="cardTestmimonial">
                <div class="shadow-sm p-3 mb-5 bg-white ">
                  <FontAwesomeIcon
                    className="iconTestmimonial"
                    icon={faQuoteLeft}
                  />
                  <p class="card-text">
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
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus naes
            liberit vitultricies sit dignissim pellentesque. Etiam duis eu
            auctor snjnj amet dola pellentesque.umauriLorem ipsum dolor sit amet
            consectetur. Vitae liberofd cras purus nam. Ultrices
          </p>
        </div>
        <div>
          <div class="row container text-align-left">
            <div class="col-lg-4 col-md-4">
              <div class="cardBlog">
                <div class=" p-3 mb-5 ">
                  <img
                    class="card-img-top"
                    src="/assets/man.png"
                    alt="Card image cap"
                  />
                  <h5 class="card-title">Lorem ispum dolar sit amet</h5>
                  <p class="card-text">
                    <ReadMore>
                      Lorem ipsum dolor sit amet consectetur. Vitaerr purus naes
                      liberit vitultricies sit dignissim pellat dolar mwt amwrt
                      doar amet dolaer
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="cardBlog">
                <div class="p-3 mb-5 ">
                  <img
                    class="card-img-top"
                    src="/assets/man.png"
                    alt="Card image cap"
                  />
                  <h5 class="card-title">Lorem ispum dolar sit amet</h5>
                  <p class="card-text">
                    <ReadMore>
                      Lorem ipsum dolor sit amet consectetur. Vitaerr purus naes
                      liberit vitultricies sit dignissim pellat dolar mwt amwrt
                      doar amet dolaer
                    </ReadMore>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="cardBlog">
                <div class=" p-3 mb-5 ">
                  <img
                    class="card-img-top"
                    src="/assets/man.png"
                    alt="Card image cap"
                  />
                  <h5 class="card-title">Lorem ispum dolar sit amet</h5>
                  <p class="card-text">
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
