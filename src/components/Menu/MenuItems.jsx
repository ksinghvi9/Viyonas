import React from 'react';
import QtyControl from '../UI/QtyControl';

const placeholderImg = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

const MenuItems = ({ categoryData, cart, addToCart, updateItemQty }) => {
  if (!categoryData || categoryData.items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <div className="menu-category-group">
      {categoryData.items.map((item, idx) => {
        const imgSrc = (item.image && typeof item.image === 'string' && item.image.trim() !== '') ? item.image : placeholderImg;
        const price = item.price || 0;

        return (
          <div className="menu-item" key={`menu-${idx}`}>
            <img 
              className="item-img" 
              src={imgSrc} 
              onError={(e) => { e.target.src = placeholderImg; }} 
              alt={item.name} 
            />
            <div className="item-details">
              <h4 className="item-name">{item.name}</h4>
              <div className="item-price-row">
                <span className="item-price">₹{price.toFixed(2)}</span>
                <div className="item-btn-container">
                  <QtyControl 
                    item={item} 
                    price={price} 
                    cart={cart} 
                    addToCart={addToCart} 
                    updateItemQty={updateItemQty} 
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
