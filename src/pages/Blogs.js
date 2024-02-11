import React from "react";
// import { Link } from "react-router-dom";

import "../styles/main.css";
import "../styles/pageStyles/landing.css";
import "../styles/pageStyles/followUps.css";

export default function Blogs() {
  return (
    <>
      <div className="fadeIn">
        <div className="header fadeIn">
          <p>
            <span className="hero gradient-text">
              Wealth Unwrapped: Insider Real Estate Tales
            </span>
            <br /> <br />
            <span id="follow-up-subHeader" className="subHeader">
              Explore Tips, News, Updates – Your Gateway to Success!
            </span>
          </p>
        </div>
        <div className="section">
          <p>How Inflation Works and Real Estate Beats it</p>
          <p>How to Maximize Returns on a House Flip</p>
          <p>Why the Rich invest in Real Estate</p>
          <p>Navigating FENYX</p>
        </div>
      </div>
    </>
  );
}
