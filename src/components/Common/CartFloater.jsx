import React from 'react';

const CartFloater = ({ totalQty, toggleCart }) => {
  if (totalQty === 0) return null;

  return (
    <div className="cart-floater" style={{ display: 'flex' }} onClick={toggleCart}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="cart-badge">{totalQty}</span>
    </div>
  );
};

export default CartFloater;
