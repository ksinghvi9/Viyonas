import { useState, useCallback } from 'react';

export function useCart() {
  const [cart, setCart] = useState({});

  const addToCart = useCallback((item, price) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[item.name]) {
        newCart[item.name] = { item, price, qty: 1 };
      } else {
        newCart[item.name] = {
          ...newCart[item.name],
          qty: newCart[item.name].qty + 1
        };
      }
      return newCart;
    });
  }, []);

  const updateItemQty = useCallback((itemName, delta) => {
    setCart((prevCart) => {
      if (!prevCart[itemName]) return prevCart;

      const newCart = { ...prevCart };
      const updatedQty = newCart[itemName].qty + delta;
      
      if (updatedQty <= 0) {
        delete newCart[itemName];
      } else {
        newCart[itemName] = {
          ...newCart[itemName],
          qty: updatedQty
        };
      }
      return newCart;
    });
  }, []);

  const getTotalQty = useCallback(() => {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.qty;
    });
    return total;
  }, [cart]);

  const getTotalPrice = useCallback(() => {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart({});
  }, []);

  return {
    cart,
    addToCart,
    updateItemQty,
    getTotalQty,
    getTotalPrice,
    clearCart
  };
}
