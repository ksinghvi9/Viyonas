import React from 'react';
import siteContent from '../../data/siteContent.json';

const Hero = () => {
  const { hero } = siteContent;
  
  return (
    <div className="card hero-card">
      <img src={hero.background} className="hero-bg" alt="Restaurant Interior" loading="lazy" />
      <div className="hero-overlay">
        {/* We use dangerouslySetInnerHTML to allow <br> tags from the JSON, or replace them. */}
        <h2 dangerouslySetInnerHTML={{ __html: hero.title.replace('\\n', '<br/>') }}></h2>
        <p>{hero.contact}</p>
      </div>
    </div>
  );
};

export default Hero;
