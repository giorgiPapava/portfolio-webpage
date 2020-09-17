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
  faFileContract,
  faFilePdf,
  faHouseUser,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

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
          <li className="active">
            <FontAwesomeIcon icon={faHouseUser} />
            Home
          </li>
          <li>
            <FontAwesomeIcon icon={faFileContract} />
            About Me
          </li>
          <li>
            <FontAwesomeIcon icon={faFilePdf} />
            Resume
          </li>
          <li>
            <FontAwesomeIcon icon={faProjectDiagram} />
            Projects
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressBook} />
            Contact
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
