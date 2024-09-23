import React from 'react';
import Card from './Card';

const CategoryProducts = () => {
  return (
    <div className="py-8 bg-gray-900">
      <div className="px-20 flex flex-wrap justify-around">
        {categories.map((category) => (
          <Card key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
