import React from 'react';
import siteContent from '../../data/siteContent.json';

const CartModal = ({ 
  isOpen, 
  toggleCart, 
  cart, 
  updateItemQty, 
  totalPrice, 
  totalQty 
}) => {
  const { whatsappNumber } = siteContent.contact;

  const generateOrderMessage = () => {
    const itemsList = Object.keys(cart).map((name) => {
      const item = cart[name];
      return `${name} x${item.qty} = ₹${item.price * item.qty}`;
    }).join("\n");
    
    return `New Order

Items Ordered:
${itemsList}

Total Items: ${totalQty}
Total Amount: ₹${totalPrice}`;
  };

  const showCartToWaiter = () => {
    if (totalQty === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert(generateOrderMessage());
    toggleCart();
  };

  const homeDelivery = () => {
    if (totalQty === 0) {
      alert("Your cart is empty.");
      return;
    }
    
    const message = generateOrderMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toggleCart();
  };

  return (
    <>
      <div 
        className="cart-modal-overlay" 
        style={{ display: isOpen ? 'block' : 'none' }} 
        onClick={toggleCart}
      ></div>
      <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={toggleCart}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="cart-items-list">
          {totalQty === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', marginTop: '40px' }}>
              Your cart is empty.
            </p>
          ) : (
            Object.keys(cart).map(name => {
              const item = cart[name];
              return (
                <div className="cart-list-item" key={name}>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{name}</div>
                    <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
                  </div>
                  <div className="cart-item-actions">
                    <button className="qty-btn" onClick={() => updateItemQty(name, -1)}>-</button>
                    <div className="qty-display">{item.qty}</div>
                    <button className="qty-btn" onClick={() => updateItemQty(name, 1)}>+</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-grand-total">
            <span>Total Amount</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="cart-action-buttons">
            <button className="show-waiter-btn" onClick={showCartToWaiter}>
              Show Cart to Waiter
            </button>
            <button className="home-delivery-btn" onClick={homeDelivery}>
              Home delivery
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
