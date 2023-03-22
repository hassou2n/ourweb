/** @format */

import React from "react";
import "./Blog.css";
import { ReadMore } from "../Action/ReadMore";

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
                <div class="testimony-entry">
                  <div class="feed-bubble shadow-sm p-3">
                    <i class=" iconTestmimonial fa-solid fa-quote-left fa-2xl"></i>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                  <div class="author-img mx-1 mb-3"></div>
                  <span className="user px-3">
                    <p class="userP">Robert Mountauin</p>
                    <p>Software Engineer</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cardTestmimonial">
                <div class="testimony-entry">
                  <div class="feed-bubble shadow-sm p-3">
                    <i class=" iconTestmimonial fa-solid fa-quote-left fa-2xl"></i>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                  <div class="author-img mx-1 mb-3"></div>
                  <span className="user px-3">
                    <p class="userP">Robert Mountauin</p>
                    <p>Software Engineer</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="cardTestmimonial">
                <div class="testimony-entry">
                  <div class="feed-bubble shadow-sm p-3">
                    <i class=" iconTestmimonial fa-solid fa-quote-left fa-2xl"></i>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                  <div class="author-img mx-1 mb-3"></div>
                  <span className="user px-3">
                    <p class="userP">Robert Mountauin</p>
                    <p>Software Engineer</p>
                  </span>
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
