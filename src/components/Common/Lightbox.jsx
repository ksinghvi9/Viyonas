import React, { useEffect, useState } from 'react';
import galleryData from '../../data/gallery.json';

const placeholderImg = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

const Lightbox = ({ isOpen, currentIndex, closeLightbox }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show && !isOpen) return null;

  const item = galleryData[currentIndex];

  return (
    <>
      <div 
        className="lightbox-overlay" 
        style={{ display: show ? 'block' : 'none' }} 
        onClick={closeLightbox}
      ></div>
      <div 
        className={`lightbox-modal ${isOpen ? 'open' : ''}`} 
        style={{ display: show ? 'flex' : 'none' }}
      >
        <button className="close-lightbox" onClick={closeLightbox}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="lightbox-content">
          {item && item.type === 'video' ? (
            <video src={item.src} controls autoPlay playsInline></video>
          ) : (
            item && <img src={item.src} onError={(e) => { e.target.src = placeholderImg; }} alt="Gallery Lightbox" />
          )}
        </div>
      </div>
    </>
  );
};

export default Lightbox;
