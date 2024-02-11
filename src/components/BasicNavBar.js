import { useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
import { GiHamburgerMenu } from "react-icons/gi";

import "../styles/componentStyles/basicNavBar.css";

import useWindowDimensions from "../services/windowSize";

export default function BasicNavBar() {
  const { width, height } = useWindowDimensions();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {width >= 960 && (
        <Headroom style={{ zIndex: "10" }}>
          <div
            className="landscape"
            style={{ paddingTop: "15px", paddingBottom: "15px" }}
          >
            <Link className="subHeader logo-link" to="/" translate="no">
              FENYX
            </Link>
            <div className="nav-pages">
              <Link to="/why-homes" className="nav-link">
                WHY HOMES
              </Link>
              <Link to="/how-it-works" className="nav-link">
                HOW IT WORKS
              </Link>
              <Link to="/blogs" className="nav-link">
                BLOGS
              </Link>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <Link
                className="gradient-background link center"
                style={{ fontSize: "16px" }}
                to="/get-started"
              >
                GET STARTED
              </Link>
              <Link
                className="plain link center"
                style={{ fontSize: "16px" }}
                to="#"
              >
                LOG IN
              </Link>
            </div>
          </div>
        </Headroom>
      )}
      {width < 960 && (
        <Headroom style={{ zIndex: "10" }}>
          <div
            className="hamburger"
            style={{ paddingTop: "15px", paddingBottom: "15px" }}
            translate="no"
          >
            <Link className="subHeader logo-link" to="/">
              FENYX
            </Link>
            <GiHamburgerMenu
              size={25}
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          </div>
          {isOpen && (
            <div className="slideIn" style={{ display: "flex" }}>
              <div
                style={{
                  paddingTop: "30px",
                  position: "absolute",
                  height: `${height}px`,
                  width: "30%",
                  minWidth: "150px",
                  backdropFilter: `blur(60px)`,
                  right: "0px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                }}
              >
                <div
                  style={{
                    padding: "0px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Link
                    to="/get-started"
                    className="nav-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    GET STARTED
                  </Link>
                  <Link
                    to="#"
                    className="nav-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    LOGIN
                  </Link>
                </div>
                <div
                  style={{
                    padding: "0px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Link
                    to="/why-homes"
                    className="nav-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    WHY HOMES
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="nav-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    HOW IT WORKS
                  </Link>
                  <Link
                    to="/blogs"
                    className="nav-link"
                    onClick={() => setIsOpen((isOpen) => !isOpen)}
                  >
                    BLOGS
                  </Link>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  height: `${height}px`,
                  width: "70%",
                  background: "transparent",
                }}
                onTouchStart={() => setIsOpen((isOpen) => !isOpen)}
              />
            </div>
          )}
        </Headroom>
      )}
    </>
  );
}
