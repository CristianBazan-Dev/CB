import React from "react";
import "./header.css";
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src="https://res.cloudinary.com/droyfngct/image/upload/v1696290871/Brand/Web/Logo%20-%20Compreso.png" alt="" />
      </div>

      <nav>
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/services">
            <li>Servicios</li>
          </Link>
          <Link to="/about">
            <li>Acerca de</li>
          </Link>
          <Link to="/contact">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>


      {/* <Link to="" target="_blank" className="whatsapp-icon-container">
        <Whatsapp />
      </Link> */}
    </header>
  );
}

export default Header;
