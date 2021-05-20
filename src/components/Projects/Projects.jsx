import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Web development_" />
          {projects.map((project) => {
            const {
              title,
              dates,
              info,
              info2,
              projectinfo,
              url,
              img,
              id,
              link,
              github,
              repo,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <p className="project-wrapper__text-dates font-mono">{dates}</p>
                      <div className="project-wrapper__text-block">
                        <p className="project-wrapper__text-info">{info}</p>
                        <p className="project-wrapper__text font-mono font-semibold lowercase black-font">
                          {info2 || ''}
                        </p>
                      </div>
                      <div className="project-ctas">
                        {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button"
                          href={repo || ''}
                        >
                          <i className={`fa fa-${github}`} />
                        </a>
                        )}
                         {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button"
                          href={url || ''}
                        >
                          <i className={`fa fa-${link}`} />
                          <i class="fas fa-external-link-alt"></i>
                        </a>
                        )}
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
