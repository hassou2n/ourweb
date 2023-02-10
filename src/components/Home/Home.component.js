/** @format */

import React from "react";
import "./Home.css";
import { AboutUs } from "../AboutUs/AboutUs.component";
import { Services } from "../Services/Services.component";
import { Blog } from "../Blog/Blog.component";
import { Footer } from "../Footer/Footer.component";
export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container text-center">
        {/* <img src="./assets/bag.png" alt="img" width="1600px" height="900px"/> */}
        <div className="homeTitle">Lorem ipsum dolor sit amet vitae</div>
        <p className="homeTitleP">
          Lorem ipsum dolor sit amet consectetur. Vitae libero cras purus nam.
          Ultrices libero sit vitae ultricies sit dignissim pellentesque. Etiam
          duis eu auctor pellentesque. Eu mauri
        </p>
        <div className="homeButton container text-center">
          <div>Get started</div>
          <div>Learn more</div>
        </div>
      </div>
      <AboutUs />
      <Services />
      <Blog />
      <Footer />
    </section>
  );
};
