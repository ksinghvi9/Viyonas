import React from 'react';
import siteContent from '../../data/siteContent.json';

const Navbar = () => {
  const { header } = siteContent;
  
  return (
    <div className="header">
      <img 
        src={header.bannerImg} 
        onError={(e) => { e.target.src = header.bannerFallback; }} 
        className="banner" 
        alt="Indian Sabjis and Dals" 
      />
      <div className="logo-container">
        <div className="logo-wrapper">
          <img 
            src={header.logo} 
            className="logo" 
            alt="Viyonas Restaurant Logo" 
            fetchpriority="high" 
          />
        </div>
      </div>
      <h2>{header.title}</h2>
    </div>
  );
};

export default Navbar;
