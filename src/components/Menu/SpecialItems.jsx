import React from 'react';
import siteContent from '../../data/siteContent.json';
import QtyControl from '../UI/QtyControl';

const placeholderImg = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

const SpecialItems = ({ menuData, cart, addToCart, updateItemQty }) => {
  const { special } = siteContent.sections;
  
  // Find best sellers across all categories
  const bestSellers = [];
  menuData.forEach(categoryObj => {
    categoryObj.items.forEach(item => {
      if (item.bestseller) {
        bestSellers.push(item);
      }
    });
  });

  if (bestSellers.length === 0) return null;

  return (
    <div className="card todays-special-card">
      <h2 className="section-title">{special.title}</h2>
      <p className="section-subtitle">{special.subtitle}</p>
      <div className="special-container">
        {bestSellers.map((item, idx) => {
          const imgSrc = (item.image && typeof item.image === 'string' && item.image.trim() !== '') ? item.image : placeholderImg;
          return (
            <div className="special-item" key={`special-${idx}`}>
              <img src={imgSrc} onError={(e) => { e.target.src = placeholderImg; }} alt={item.name} loading="lazy" />
              <p className="special-name">{item.name}</p>
              <div className="special-item-bottom">
                <p className="special-price">₹{item.price}</p>
                <div className="item-btn-container">
                  <QtyControl 
                    item={item} 
                    price={item.price} 
                    cart={cart} 
                    addToCart={addToCart} 
                    updateItemQty={updateItemQty} 
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialItems;
