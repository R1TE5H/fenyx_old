import { Link } from "react-router-dom";

//Styles
import "../styles/main.css";
import "../styles/pageStyles/landing.css";
import WaitList from "../components/WaitList";
import LandingBlogs from "../components/LandingBlogs";

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
                Discover the enduring stability of real estate—an investment
                fortress in a dynamic landscape. With a low correlation to
                traditional holdings, properties offer resilience and
                diversification. Amid market fluctuations, real estate stands as
                a solid anchor, preserving and amplifying gains. Experience
                financial security through an investment avenue that aligns
                seamlessly with our unwavering vision.
              </p>
              <Link className=" center link gradient-background" to="/blogs">
                BLOGS
              </Link>
            </div>

            <img
              src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Change to Chart"
              style={{ width: `clamp(250px, 70%, 275px)` }}
            />
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
        <div className="section center">
          <WaitList />
        </div>
      </div>
    </>
  );
}
