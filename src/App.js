/** @format */

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.component";
import { Home } from "./components/Home/Home.component";
import { AboutUs } from "./components/AboutUs/AboutUs.component";
import { Services } from "./components/Services/Services.component";
import { ContactUs } from "./components/ContactUs/ContactUs.component";
import { Blog } from "./components/Blog/Blog.component";
import { Footer } from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <AboutUs />
        <Services />
        <ContactUs />
        <Blog />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
