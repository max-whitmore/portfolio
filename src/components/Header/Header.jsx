import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <header className="header navbar-static-bottom" id="header">
      <Container>
        <div className="header-container">
        <div className="brand">
          Max Whitmore
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
  );
};

export default Header;
