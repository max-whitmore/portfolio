import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>

        <div className="footer-content">
        <div className="social-links">
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
          <p className="footer__text">Created by{' '}
            <a href="https://github.com/maaxw" target="_blank" rel="noopener noreferrer">
              Max Whitmore.
            </a> © {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
