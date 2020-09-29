import React, { useEffect, useState } from 'react';
import './navigation.scss';
import profile from 'images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
  faCode,
  faEnvelope,
  faHouseUser,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';

function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    if (showNavigation) {
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = 'unset');
    }
  }, [showNavigation]);

  return (
    <>
      <div
        className={`burger ${showNavigation ? 'toggle' : ''}`}
        onClick={() => setShowNavigation(!showNavigation)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`navbar-wrapper ${showNavigation ? 'active' : ''}`}>
        <nav>
          <div className="profile-wrapper">
            <img
              src={profile}
              title="I'm Giorgi"
              alt=""
              className="profile-picture"
            />
            <h1>Giorgi Papava</h1>
          </div>

          <ul>
            <li>
              <Link
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={() => setShowNavigation(false)}
              >
                <FontAwesomeIcon icon={faHouseUser} />
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                offset={131}
                smooth={true}
                duration={1000}
                onClick={() => setShowNavigation(false)}
              >
                <FontAwesomeIcon icon={faUser} />
                About Me
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="skills-section"
                spy={true}
                smooth={true}
                offset={450}
                duration={1000}
                onClick={() => setShowNavigation(false)}
              >
                <FontAwesomeIcon icon={faCode} />
                Skills
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setShowNavigation(false)}
                activeClass="active"
                to="projects-section"
                spy={true}
                offset={270}
                smooth={true}
                duration={1000}
              >
                <FontAwesomeIcon icon={faProjectDiagram} />
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowNavigation(false)}
                activeClass="active"
                to="contact-section"
                spy={true}
                offset={400}
                smooth={true}
                duration={1000}
              >
                <FontAwesomeIcon icon={faAddressBook} />
                Contact
              </Link>
            </li>
          </ul>

          <div className="social-links">
            <a
              href="https://github.com/giorgiPapava/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/giorgi-papava-7084211b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              href="https://stackoverflow.com/users/11614810/giorgi-papava/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a
              href="mailto:giorgi.papava.00@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
