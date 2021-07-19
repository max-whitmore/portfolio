import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticImage } from "gatsby-plugin-image"

import '../../style/main.scss';


import { PortfolioProvider } from '../../context/context';
import { headerData, footerData } from '../../mock/data';

function pearsonCollegeLondon() {
  const [footer, setFooter] = useState({});
  const [header, setHeader] = useState({});


  useEffect(() => {
    setHeader({ ...headerData });
    setFooter({ ...footerData });

  }, []);
  return (
    <PortfolioProvider value={{ header, footer }}>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Max Whitmore - Pearson College London</title>
        <html lang='en' />
        <meta name="description" content="Page not found" />
      </Helmet>

<main>
  <article>
  <Fade bottom duration={1000} delay={500} distance="30px">
    <div className="container">
<div className="pp-wrapper">
<div className="pp-content">
  <h1 className="pp-title">Pearson College London</h1>
  <p className="pp-description"> Pearson College London is a private academic degree provider based in London owned by Pearson plc. It was founded in 2012, and is the only FTSE 100 company in the UK to design and deliver degrees. I was tasked with rebuilding the website in to something more <strong>modern and accessible</strong>. Working closely with the graphic designer I was provided with UI/UX mockups using wire framing to ensure the end result will fulfill all expectations. Developing the <strong>frontend</strong>, as well as configuring AEM (CMS) templates and adjustable styling options in the CMS in order to allow content authors to make custom changes to the website that are <strong>seamless</strong>. In addition, optimising SEO and implementing the ability to sell courses via a <strong>shopify integration</strong></p>
</div>
</div>
<div className="pp-img-section">
<div className="pp-img-container">
  <StaticImage
      src="../../images/pcl/pcl-homepage.png"
      alt="Pearson College London website"
      placeholder="blurred"
      width={1920}
    />
</div>
</div>
<div className="pp-info-wrapper">
  <div className="pp-info-container">
    <div className="pp-info-section">
    <h3 className="pp-info-title">Links</h3>
    <span className="pp-info-desc">Learn more here.</span>
    <ul className="pp-info-list">
      <li><a href="https://pearsoncollegelondon.ac.uk">Pearson College London site</a></li>
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
</div>
</Fade>
  </article>
</main>

      <Footer />
    </PortfolioProvider>
  );
}

export default pearsonCollegeLondon;