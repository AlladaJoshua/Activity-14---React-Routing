import React from "react";
import Logo from "../assets/BrightVisionPhotographay.png";
import "../Css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section className="Logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </section>
      <section className="Links">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/service">
            <li>Service</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </section>
      <section className="btns">
        <button className="signIn">Sign up</button>
        <button className="login">Login</button>
      </section>
    </nav>
  );
};

export default Navbar;
