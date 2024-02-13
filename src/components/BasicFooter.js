import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

import "../styles/pageStyles/followUps.css";
import "../styles/componentStyles/basicFooter.css";

export default function BasicFooter() {
  return (
    <>
      <div className="footer">
        <div className="div-container">
          <Link
            className="subHeader footer-logo"
            to="/"
            style={{ textDecoration: "none" }}
          >
            FENYX
          </Link>
          <a className="footer-contact" href="https://www.linkedin.com/">
            <FaLinkedinIn size={25} />
          </a>
        </div>
        <div
          className="div-container"
          style={{
            textAlign: "right",
          }}
        >
          <Link to="/why-homes" className="footer-link">
            WHY HOMES
          </Link>
          <Link to="/how-it-works" className="footer-link">
            HOW IT WORKS
          </Link>
          <Link to="/blogs" className="footer-link">
            BLOGS
          </Link>
        </div>
      </div>
    </>
  );
}
