import React from 'react';
import siteContent from '../../data/siteContent.json';
import galleryData from '../../data/gallery.json';

const placeholderImg = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

const Gallery = ({ openLightbox }) => {
  const { gallery } = siteContent.sections;

  return (
    <div className="card gallery-card-block">
      <h2 className="section-title">{gallery.title}</h2>
      <p className="section-subtitle">{gallery.subtitle}</p>
      <div className="gallery-container">
        {galleryData.map((item, index) => {
          if (item.type === 'video') {
            return (
              <div className="gallery-item" key={`gallery-${index}`} onClick={() => openLightbox(index)}>
                <video src={`${item.src}#t=0.001`} muted loop playsInline preload="metadata"></video>
                <div className="play-icon-overlay"><i className="fa-solid fa-play"></i></div>
              </div>
            );
          } else {
            return (
              <div className="gallery-item" key={`gallery-${index}`} onClick={() => openLightbox(index)}>
                <img src={item.src} onError={(e) => { e.target.src = placeholderImg; }} alt={`Gallery Item ${index + 1}`} loading="lazy" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;
