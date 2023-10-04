import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function About(props) {
  return (

    <article className="app">
    <Header />

    <main>
      <h1>About</h1>

      
      <Link to="/services">Servicios</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/">home</Link>
   
    </main>

    <Footer />
  </article>



  );
}

export default About;