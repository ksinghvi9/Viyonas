import React, { useState } from 'react';
import siteContent from '../../data/siteContent.json';
import menuData from '../../data/menu.json';
import CategoryPills from './CategoryPills';
import MenuItems from './MenuItems';

const Menu = ({ cart, addToCart, updateItemQty }) => {
  const { menu } = siteContent.sections;
  const [currentCategory, setCurrentCategory] = useState(menuData[0]?.category || 'Other');

  // Find the data for the currently selected category
  const activeCategoryData = menuData.find(c => c.category === currentCategory) || menuData[0];

  return (
    <div className="card menu-card">
      <h2 className="section-title">{menu.title}</h2>
      <p className="section-subtitle">{menu.subtitle}</p>
      
      <CategoryPills 
        menuData={menuData} 
        currentCategory={currentCategory} 
        setCurrentCategory={setCurrentCategory} 
      />

      <div className="menu-content">
        <MenuItems 
          categoryData={activeCategoryData}
          cart={cart}
          addToCart={addToCart}
          updateItemQty={updateItemQty}
        />
      </div>
    </div>
  );
};

export default Menu;
