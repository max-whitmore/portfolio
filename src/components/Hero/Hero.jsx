import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
          <h3 className="hero-title"> Hi, I'm {title}<span className="text-color-main"> {name}</span>, Front End Developer & cat dad.

          </h3>
          <h3 className="hero-subtitle">
          {subtitle}
          </h3>
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
        </div>
      </Container>
    </section>
  );
};

export default Header;