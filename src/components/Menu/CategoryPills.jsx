import React from 'react';

const placeholderImg = "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";

const CategoryPills = ({ menuData, currentCategory, setCurrentCategory }) => {
  return (
    <div className="category-container">
      {menuData.map((catObj) => {
        // Find first image for the pill, or use placeholder
        let firstImg = placeholderImg;
        const itemWithImg = catObj.items.find(i => i.image && typeof i.image === 'string' && i.image.trim() !== '');
        if (itemWithImg) firstImg = itemWithImg.image;

        const isActive = catObj.category === currentCategory;

        return (
          <div 
            key={catObj.category}
            className={`category-pill ${isActive ? 'active' : ''}`} 
            onClick={() => setCurrentCategory(catObj.category)}
          >
            <img src={firstImg} onError={(e) => { e.target.src = placeholderImg; }} alt={catObj.category} />
            <span>{catObj.category}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPills;
