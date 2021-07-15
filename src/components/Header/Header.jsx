import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { header } = useContext(PortfolioContext);
  const { networks } = header;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (       
    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={100} distance="30px">
 
        <header className="header navbar-static-bottom" id="header">
      <Container>
        <div className="header-container">
        <div className="brand">
          <h1>Max Whitmore</h1>
        </div>
        <div className="header-social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        </div>
      </Container>
    </header>
    </Fade>
  );
};

export default Header;
