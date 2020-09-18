import React from 'react';
import './navigation.scss';
import profile from 'images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
  faCode,
  faHouseUser,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';

function Navigation() {
  return (
    <div className="navbar-wrapper">
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
              offset={200}
              duration={1000}
            >
              <FontAwesomeIcon icon={faCode} />
              Skills
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="projects-section"
              spy={true}
              offset={230}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon icon={faProjectDiagram} />
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact-section"
              spy={true}
              offset={220}
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
            href="https://www.facebook.com/UvuvwevwevweOnyeteewveUgwemubwemOssas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com/NastyBlackLeg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
