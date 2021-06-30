import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { PortfolioProvider } from '../../context/context';

import { headerData, footerData } from '../../mock/data';

function Test() {
  const [footer, setFooter] = useState({});
  const [header, setHeader] = useState({});


  useEffect(() => {
    setHeader({ ...headerData });
    setFooter({ ...footerData });

  }, []);

  return (
    <PortfolioProvider value={{ header, footer }}>
      <Header />
<main>
  <article>
<div className="pp-wrapper">
<div className="pp-content">
  <h1 className="pp-title">Pearson College London</h1>
  <p className="pp-description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
</div>
</div>
<div className="pp-img-section">
<div className="pp-img-container">
  <img src="/images/pwgen.png" className="pp-img"></img>
  <img src="/images/pwgen.png" className="pp-img"></img>
  <img src="/images/pwgen.png" className="pp-img"></img>
</div>
</div>
<div className="pp-info-wrapper">
  <div className="pp-info-container">
    <div className="pp-info-section">
    <h3 className="pp-info-title">Links</h3>
    <span className="pp-info-desc">Learn more here.</span>
    <ul className="pp-info-list">
      <li><a href="https://pearsoncollegelondon.ac.uk">Link</a></li>
    </ul>
    </div>
    <div className="pp-info-section">
    <h3 className="pp-info-title">Tools and Technologies</h3>
    <span className="pp-info-desc">The tech stack I was involved with.</span>
    <ul className="pp-tech-list">
      <li>HTML</li>
      <li>CSS</li>
      <li>LESS</li>
      <li>JavaScript</li>
      <li>Shopify</li>
      <li>Adobe Experience Manager</li>
    </ul>
    </div>
  </div>
</div>
  </article>
</main>
      <Footer />
    </PortfolioProvider>
  );
}

export default Test;