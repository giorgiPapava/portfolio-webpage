import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';

import projectModal from 'utils/projectModal';

import ProjectsImage from '../../images/projects.jpg';
import todoImage from 'images/todo.png';
import aviciiImage from 'images/avicii.png';
import netflixClone from 'images/netflix-clone.png';
import amazonClone from 'images/amazon-clone.png';
import twitterClone from 'images/twitter-clone.png';
import covidProject from 'images/covid.png';

import './Projects.scss';
import './Modal.scss';

Modal.setAppElement('#root');

const images = {
  todo: todoImage,
  avicii: aviciiImage,
  covid: covidProject,
  amazon: amazonClone,
  twitter: twitterClone,
  netflix: netflixClone,
};

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState('');
  const [currentImg, setCurrentImg] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  function toggleModal(event) {
    const project = event.target.classList[1];
    setCurrentProject(projectModal(project));
    setCurrentImg(images[project]);
    setIsOpen(!isOpen);
  }

  return (
    <div
      className="projects-section"
      ref={ref}
      style={inView ? { backgroundImage: `url(${ProjectsImage})` } : null}
    >
      <div className="wrapper">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <div
            className="project avicii"
            onClick={(event) => toggleModal(event)}
          >
            {inView && <img src={aviciiImage} alt="avicii project" />}
          </div>
          <div className="project todo" onClick={(event) => toggleModal(event)}>
            {inView && <img src={todoImage} alt="todo project"></img>}
          </div>
        </div>

        {/* <div className="mini-projects-wrapper">
          <div
            className="project netflix"
            onClick={(event) => toggleModal(event)}
          >
            <img src={netflixClone} alt="netflix clone project"></img>
          </div>
          <div
            className="project amazon"
            onClick={(event) => toggleModal(event)}
          >
            <img src={amazonClone} alt="amazon clone project"></img>
          </div>
          <div
            className="project covid"
            onClick={(event) => toggleModal(event)}
          >
            <img src={covidProject} alt="covid project"></img>
          </div>
          <div
            className="project twitter"
            onClick={(event) => toggleModal(event)}
          >
            <img src={twitterClone} alt="twitter clone project"></img>
          </div>
        </div> */}

        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="Project"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <h2>{currentProject.name}</h2>
          <button onClick={() => setIsOpen(false)}>x</button>
          <div className="row">
            <div className="image-wrapper">
              <img src={currentImg} alt="" />
            </div>
            <div className="info-wrapper">
              <h4>Project Info:</h4>
              <p>{currentProject.description}</p>
              <h4>Project Details:</h4>
              <ul>
                <li>
                  <span>Client:</span>
                  {currentProject.client}
                </li>
                <li>
                  <span>Industry:</span>
                  {currentProject.industry}
                </li>
                <li>
                  <span>Technologies:</span>
                  {currentProject.technologies &&
                    currentProject.technologies.map((technology, i, arr) => {
                      if (arr.length - 1 === i) {
                        return (
                          <span className="technology" key={technology}>
                            {technology}.
                          </span>
                        );
                      } else {
                        return (
                          <span className="technology" key={technology}>
                            {technology},
                          </span>
                        );
                      }
                    })}
                </li>
                <li>
                  <span>Date:</span>
                  {currentProject.date}
                </li>
                <li>
                  <span>URL:</span>
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {currentProject.url}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Projects;
