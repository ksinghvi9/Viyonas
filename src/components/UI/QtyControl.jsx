import React from 'react';

const QtyControl = ({ item, price, cart, addToCart, updateItemQty }) => {
  const cartItem = cart[item.name];
  const itemQty = cartItem ? cartItem.qty : 0;
  
  if (itemQty > 0) {
    return (
      <div className="inline-qty-control">
        <button className="qty-btn" onClick={() => updateItemQty(item.name, -1)}>-</button>
        <div className="qty-display">{itemQty}</div>
        <button className="qty-btn" onClick={() => updateItemQty(item.name, 1)}>+</button>
      </div>
    );
  }

  return (
    <button className="add-btn" onClick={() => addToCart(item, price)}>
      + ADD
    </button>
  );
};

export default QtyControl;
