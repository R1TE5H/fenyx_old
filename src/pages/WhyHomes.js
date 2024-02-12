import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/pageStyles/landing.css";
import "../styles/pageStyles/followUps.css";
import WaitList from "../components/WaitList";

export default function WhyHomes() {
  return (
    <>
      <div className="fadeIn">
        <div className="header">
          <p>
            <span className="hero gradient-text">Prosper with Real Estate</span>
            <br /> <br />
            <span id="follow-up-subHeader" className="subHeader">
              Learn why real estate outshines traditional investments, paving
              the way for enduring financial success.
            </span>
          </p>
          <div className="center btn-container">
            <Link className="link gradient-background" to="/get-started">
              GET STARTED
            </Link>
          </div>
        </div>
        <div className="section">
          <p>
            <span className="hero gradient-text">
              Experience Remarkable Returns:
            </span>
            <br />
            <br />
            <span>
              In the dynamic world of investments, real estate consistently
              outshines traditional investments. Over a 6-month period, real
              estate has proven to yield substantially larger returns compared
              to its stock market counterparts.
              <br />
              <br />
              House flipping, introduces a strategic approach to investment. By
              identifying undervalued properties, making strategic renovations,
              and capitalizing on market demand, house flipping presents a
              hands-on method to amplify returns within a shorter time frame.
            </span>
          </p>
        </div>
        <div className="section">
          <p className="hero gradient-text" style={{ textAlign: "center" }}>
            Beat Inflation, Defy Recessions
          </p>
          <div className="grid">
            <div className="grid-element">
              <p>
                <span className="subHeader gradient-text">Scarcity</span>
                <br />
                <br />
                <span>
                  Unlike stocks, which can be diluted through increased
                  issuance, land and properties maintain their scarcity,
                  inherently safeguarding your investment and enhancing the
                  potential for sustained appreciation over time.
                </span>
              </p>
            </div>
            <div className="grid-element">
              <p>
                <span className="subHeader gradient-text">Tangibility</span>
                <br />
                <br />
                <span>
                  Real estate is tangible. The intrinsic value of owning a
                  physical asset, coupled with the potential property
                  appreciation, provides a level of control and stability that
                  goes beyond the intangibility of stocks.
                </span>
              </p>
            </div>
            <div className="grid-element">
              <p>
                <span className="subHeader gradient-text">Stability</span>
                <br />
                <br />
                <span>
                  In a world where financial landscapes can be turbulent, real
                  estate emerges as a beacon of stability. Unlike volatile
                  markets, real estate offers enduring value, acting as a robust
                  foundation for long-term financial security.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="section" style={{ textAlign: "right" }}>
          <p>
            <span className="hero gradient-text">Diversify and Conquer</span>
            <br />
            <br />
            <span>
              Diversification is crucial for a sound investment portfolio. Real
              estate offers a unique avenue to diversify your portfolio,
              spreading risk across different asset classes. Whether you're a
              seasoned investor or just starting, the ability to diversify
              within the real estate market provides a resilient buffer against
              market uncertainties.
            </span>
          </p>
        </div>
        <div className="section center">
          <WaitList />
        </div>
      </div>
    </>
  );
}
