import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <div className="skills-section">
      <div className="wrapper">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5} />
            <h3>HTML5</h3>
            <p>
              I can write semantic, SEO friendly HTML5. Accessibility is
              important. Accessibility makes sure that our applications are
              available to everyone.
            </p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCss3Alt} />
            <h3>CSS3</h3>
            <p>
              Doing fancy CSS tricks is my favorite task. I love using SASS for
              code readability and animatinon to achieve good looking website.
            </p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs} />
            <h3>JavaScript</h3>
            <p>
              ES6+, Ajax, ReactJS, Redux. I've experience with libraries like
              MaterialUI, axios and more.
            </p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} />
            <h3>React</h3>
            <p>
              I used to love vanilla JavaScript before I started coding with
              ReactJS. I'm using React on every project that I make for now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
