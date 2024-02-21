import React from "react";
import { Link } from "react-router-dom";

import "../styles/pageStyles/landing.css";
import "../styles/pageStyles/followUps.css";
import BasicFooter from "../components/BasicFooter";

export default function HowItWorks() {
  return (
    <>
      <div className="fadeIn">
        <div className="secondary-header section">
          <p style={{ marginBottom: "5%" }}>
            <span className="hero gradient-text">Upgrade the World</span>
            <br /> <br />
            <span id="follow-up-subHeader" className="subHeader">
              Here's How it Works
            </span>
          </p>
          <div className="center btn-container">
            <Link to="/get-started" className="link gradient-background">
              Get Started
            </Link>
          </div>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">
              Build a Better World - One House at a Time
            </span>
            <br />
            <br />
            <span>
              We believe in transforming lives through the power of accessible
              real estate investment. Our mission is to empower individuals from
              all walks of life to secure their financial future effortlessly.
              With a commitment to transparency, innovation, and unwavering
              integrity, we strive to redefine the landscape of wealth creation,
              providing a pathway for everyone to thrive. Join us in this
              journey, where we harness the potential of real estate to not just
              build fortunes but to uplift dreams, foster prosperity, and create
              a world where financial empowerment knows no boundaries.
            </span>
          </p>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">
              Strategic Property Enhancements
            </span>
            <br />
            <br />
            <span>
              Our approach to strategic house flipping is routed in precision
              and expertise. We meticulously analyze market trends, evaluate the
              property's location, and anticipate the optimal return on
              investment. Your investment is not just secured; it's
              strategically enhanced for unparalleled success. Sit back, relax,
              and watch your property flourish under our expert care.
            </span>
          </p>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">
              Transparent Contractor Estimates
            </span>
            <br />
            <br />
            <span>
              When it comes to contractor estimates, we go the extra mile. Our
              team engages directly with contractors to obtain detailed
              estimates for each project. We not only provide a transparent
              breakdown of renovation costs but also offer a comprehensive
              justification for every expense, and provide investors with a
              reliable estimate timeline, keeping them informed and empowered
              throughout the entire renovation process. It's not just about
              estimates; it's about fostering trust and providing a clear
              roadmap to success.
            </span>
          </p>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">Invest in Seconds</span>
            <br />
            <br />
            <span>
              We redefine real estate investing, making it effortlessly
              accessible to our investors. With a global catalogue of houses at
              your fingertips, the power to invest is just a click away.
              Seamlessly navigate our projects, explore opportunities worldwide,
              and with a simple click, position your investments strategically.
              We believe in empowering investors with the ease and convenience
              they deserve, ensuring a seamless and efficient real estate
              investment experience.
            </span>
          </p>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">
              Real-Time Investment Updates
            </span>
            <br />
            <br />
            <span>
              Watch your investment unfold in real-time. We offer investors
              daily or weekly updates, complete with captivating time-lapse
              visuals highlighting each accomplished milestone. Watch your
              investment flourish in real-time, empowering you with a dynamic
              and engaging experience. It's not just updates; it's a journey you
              can witness and be a part of, ensuring that every success is
              shared, and every accomplishment is celebrated together."
            </span>
          </p>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">Strategic Property Sales</span>
            <br />
            <br />
            <span>
              Our commitment to strategic property sales goes beyond the
              transaction. We go above and beyond, meeting with potential buyers
              and collaborating closely with top-tier realtors to secure not
              just good but the best offers for your property. Your success is
              our priority, and our hands-on approach to property sales ensures
              the highest returns and a seamless, efficient flipping process.
            </span>
          </p>
        </div>
        <div className="section ">
          <p>
            <span className="hero gradient-text">
              Shared Profits for Investors
            </span>
            <br />
            <br />
            <span>
              We are committed to your success and this extends to the core of
              our profit-sharing model. We believe in rewarding contribution –
              investors receive a percentage based on their invaluable
              contribution to the flip. Your prosperity is our priority, and our
              profit-sharing structure ensures that every investor enjoys a fair
              and proportionate slice of the success they helped create.
            </span>
          </p>
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
