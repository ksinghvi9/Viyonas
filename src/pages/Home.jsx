import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Menu from '../components/Menu/Menu';
import SpecialItems from '../components/Menu/SpecialItems';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';
import CartFloater from '../components/Common/CartFloater';
import CartModal from '../components/Common/CartModal';
import Lightbox from '../components/Common/Lightbox';
import { useCart } from '../hooks/useCart';
import menuData from '../data/menu.json';

const Home = () => {
  const { cart, addToCart, updateItemQty, getTotalQty, getTotalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0 });

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const openLightbox = (index) => setLightboxState({ isOpen: true, index });
  const closeLightbox = () => setLightboxState({ isOpen: false, index: lightboxState.index });

  return (
    <>
      <Navbar />
      
      <SpecialItems 
        menuData={menuData}
        cart={cart}
        addToCart={addToCart}
        updateItemQty={updateItemQty}
      />
      
      <Menu 
        cart={cart}
        addToCart={addToCart}
        updateItemQty={updateItemQty}
      />
      
      <Hero />
      
      <Gallery openLightbox={openLightbox} />
      
      <Testimonials />
      
      <Footer />
      
      <CartFloater 
        totalQty={getTotalQty()} 
        toggleCart={toggleCart} 
      />
      
      <CartModal 
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cart={cart}
        updateItemQty={updateItemQty}
        totalPrice={getTotalPrice()}
        totalQty={getTotalQty()}
      />
      
      <Lightbox 
        isOpen={lightboxState.isOpen}
        currentIndex={lightboxState.index}
        closeLightbox={closeLightbox}
      />
    </>
  );
};

export default Home;
