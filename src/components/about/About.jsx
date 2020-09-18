import React from 'react';
import './About.scss';
import './Stars.scss';

function About() {
  return (
    <div className="about-section">
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="about-wrapper">
          <div id="title">
            <span>About Me</span>
          </div>
          <div className="content-wrapper">
            <div className="title-wrapper">
              <p className="title-text">
                I am a frontend web developer. I can provide clean code and
                pixel perfect design. I also make website more & more
                interactive with web animations.
              </p>
              <p class="title-text">
                I help you build brand for your business at an affordable price.
                Delivering work within time and budget which meets client’s
                requirements is my moto.
              </p>
            </div>

            <div className="info-wrapper">
              <p>
                <span>Name:</span> Giorgi Papava
              </p>
              <p>
                <span>Email:</span>
                <a href="mailto:giorgi.papava.00@gmail.com">
                  giorgi.papava.00@gmail.com
                </a>
              </p>
              <p>
                <span>Location:</span> Tbilisi, Georgia
              </p>
              <a
                href="https://srv-file16.gofile.io/downloadStore/srv-store2/KaSNft/resume-giorgi-papava-en.pdf"
                download
              >
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
