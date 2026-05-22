import React from 'react';
import siteContent from '../../data/siteContent.json';

const Footer = () => {
  const { footer, contact } = siteContent;

  return (
    <>
      <div className="card contact-card">
        <h2 className="section-title">{siteContent.sections.contact.title}</h2>
        <p className="section-subtitle">{siteContent.sections.contact.subtitle}</p>
        
        <div className="contact-methods">
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <span>{contact.address}</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <span>{contact.phone}</span>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-envelope"></i>
            <span>{contact.email}</span>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <h3>{footer.title}</h3>
          <p>{footer.text}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
