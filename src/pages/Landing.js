import { Link } from "react-router-dom";

//Styles
import "../styles/main.css";
import "../styles/pageStyles/landing.css";
import LandingBlogs from "../components/LandingBlogs";
import BasicFooter from "../components/BasicFooter";

export default function Landing() {
  return (
    <>
      <div className=" fadeIn">
        <div className="header fadeIn">
          <p style={{ marginBottom: "5%" }}>
            <span className="header-text gradient-text">
              Democratizing House Flipping
            </span>
            <br /> <br />
            <span className="subHeader">
              Supercharge Your Portfolio. Invest in House Flips for $100.
            </span>
          </p>

          <div className="center btn-container">
            <Link className="link gradient-background" to="/get-started">
              GET STARTED
            </Link>
          </div>
        </div>
        <div className="section">
          <LandingBlogs />
        </div>
        <div className="section">
          <div className="point-values">
            <div>
              <p>
                <span className="hero gradient-text">
                  Elevate Your Investments
                </span>
                <br /> <br />
                <span className="subHeader">
                  Unlock Massive Returns at Lightning Speeds.
                </span>
              </p>
              <p>
                Experience returns surpassing traditional stocks and mutual
                funds, and marvel at the unparalleled speed of wealth growth.
                Join us in redefining the pace of investment returns.
              </p>
              <Link className=" center link gradient-background" to="/blogs">
                BLOGS
              </Link>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>Potential 6 Month Returns</p>
              <div className="stat-container">
                {" "}
                <p className="hero-stat-p">
                  <span className="hero-stat">29%</span>
                  <span>Real Estate</span>
                </p>
                <p className="hero-stat-p">
                  <span className="hero-stat">10%</span>
                  <span>S&P 500</span>
                </p>
                <p className="hero-stat-p">
                  <span className="hero-stat">8%</span>
                  <span>Mutual Funds</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section" style={{ textAlign: "right" }}>
          <div>
            <p>
              <span className="hero gradient-text">Secure Your Future</span>
              <br /> <br />
              <span className="subHeader">
                Hedge Inflation and Navigate Recessions.
              </span>
            </p>
            <p>
              Low correlation to traditional holdings makes Real Estate a potent
              hedge against rising prices and recessions. Amid market
              fluctuations, real estate stands unwavering, preserving and
              amplifying gains.
            </p>
            <Link
              className="link gradient-background"
              style={{ float: "right" }}
              to="/why-homes"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        <br />
        <div className="section">
          <div>
            <p>
              <span className="hero gradient-text">
                Your Trust, Our Commitment
              </span>
              <br /> <br />
              <span className="subHeader">
                Enjoy Effortless House Flipping.
              </span>
            </p>
            <p>
              You supply the funds and we take care of the rest. From
              contracting to selling, our team of expert flippers handles
              everything. Follow along with daily updates and recordings,
              showing the transformation.
            </p>
            <Link
              className=" center link gradient-background"
              to="/how-it-works"
            >
              HOW IT WORKS
            </Link>
          </div>
        </div>
        <div className="section">
          <p style={{ marginBottom: "5%", textAlign: "center" }}>
            <span className="hero gradient-text">Your Future Awaits</span>
            <br /> <br />
            <span className="subHeader">
              Get Started Today and Join the Real Estate Revolution
            </span>
          </p>
          <div className="center btn-container">
            <Link to="/get-started" className="link gradient-background">
              Get Started
            </Link>
          </div>
        </div>
        <BasicFooter />
      </div>
    </>
  );
}
