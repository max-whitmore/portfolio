import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, subtitle2, subtitle3, cta, img } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <div className="hero-container">
          <div className="hero-intro">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h3 className="hero-title">
                {' '}
                Hi, I&apos;m {title}
                <span className="text-color-main"> {name}</span>, Front End Developer and cat dad.
              </h3>
              <h3 className="hero-subtitle">{subtitle}<a href="https://pearsoncollegelondon.ac.uk" className="pcl-link">{subtitle2}</a>{subtitle3}</h3>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                <p className="hero-cta">
                  <span className="cta-btn cta-btn--hero">
                    <Link to="about" smooth duration={1000}>
                      {cta || 'Know more'}
                    </Link>
                  </span>
                </p>
              </Fade>
            </Fade>
          </div>
          <div className="hero-image">
            <HeroImg alt={title} filename={img} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
