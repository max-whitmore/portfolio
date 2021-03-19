import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, img } = hero;

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
        <div class="hero-container">
        <div class="hero-intro">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h3 className="hero-title"> Hi, I'm {title}<span className="text-color-main"> {name}</span>, Front End Developer & cat dad.

          </h3>
          <h3 className="hero-subtitle">
          {subtitle}
          </h3>
        </Fade>
        </div>
        <div className="hero-background">
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="hero-image">
          <div className="hero-wrapper__image">
              </div>
          </div>
        </Fade>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
