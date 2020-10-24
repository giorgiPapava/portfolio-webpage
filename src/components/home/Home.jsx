import React from 'react';
import './Home.scss';
import Typing from 'react-typing-animation';
import { useInView } from 'react-intersection-observer';

function Home() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="home-section" ref={ref}>
      {inView && (
        <div className="falling-stars">
          <div className="home-content">
            <h3>
              <Typing loop={true} startDelay={500}>
                Hi, I am <span style={{ color: '#037fff' }}>Giorgi Papava</span>{' '}
                <Typing.Backspace count={23} delay={3000} />
              </Typing>
              <Typing startDelay={3000} speed={20}>
                <p>
                  Computer science student from Georgia, inspired individual who
                  is not afraid of challenges, doing exciting projects and
                  learning new things on daily basis.
                </p>
              </Typing>
            </h3>
          </div>

          <div className="night">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
