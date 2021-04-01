import React from "react";

const CategoryItem = ({ image, title, bgColor }) => {
  return (
    <div className={`p-4 rounded-2xl my-2 `} style={{backgroundColor : bgColor}}>
      <img src={image} alt={title} className="w-24" />
    </div>
  );
};

export default CategoryItem;
