import React from "react";
import "../styles/NavigationBarStyles.css";

function NavigationBar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="nav-main-list">
            <ul className="nav-main-list-container">
              <li className="nav-main-list-items px-2">
                <a
                  className="font-weight-bold"
                  aria-label="about"
                  href="#about"
                  id="about-btn"
                >
                  About
                </a>
              </li>
              <li className="nav-main-list-items px-2">
                <a
                  className="font-weight-bold"
                  aria-label="experience"
                  href="#experience"
                  id="experience-btn"
                >
                  Experience
                </a>
              </li>
              <li className="nav-main-list-items px-2">
                <a
                  className="font-weight-bold"
                  aria-label="work"
                  href="#work"
                  id="work-btn"
                >
                  Work
                </a>
              </li>
              <li className="nav-main-list-items px-2">
                <a
                  className="font-weight-bold"
                  aria-label="contact"
                  href="#contact"
                  id="contact-btn"
                >
                  Contact
                </a>
              </li>
              <li className="nav-main-list-items px-2">
                <a
                  className="font-weight-bold"
                  aria-label="cv"
                  href="#"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
