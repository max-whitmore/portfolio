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
    <h1>Pearson College London - Front End Developer</h1>
<div className="project">
  
</div>
  </article>
</main>
      <Footer />
    </PortfolioProvider>
  );
}

export default Test;