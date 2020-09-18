import React from 'react';
import './Projects.scss';
import todoImage from 'images/todo.png';
import aviciiImage from 'images/avicii.png';
import netflixClone from 'images/netflix-clone.png';
import amazonClone from 'images/amazon-clone.png';
import twitterClone from 'images/twitter-clone.png';
import covidProject from 'images/covid.png';

function Projects() {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-wrapper">
        <div className="project">
          <img src={aviciiImage} alt="avicii project"></img>
        </div>
        <div className="project">
          <img src={todoImage} alt="todo project"></img>
        </div>
      </div>
      <h3>More</h3>

      <div className="mini-projects-wrapper">
        <div className="project">
          <img src={netflixClone} alt="netflix clone project"></img>
        </div>
        <div className="project">
          <img src={amazonClone} alt="amazon clone project"></img>
        </div>
        <div className="project">
          <img src={covidProject} alt="covid project"></img>
        </div>
        <div className="project">
          <img src={twitterClone} alt="twitter clone project"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
