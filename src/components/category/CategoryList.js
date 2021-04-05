import React from "react";
import CategoryItem from "./CategoryItem";
import diy from "../../assets/pictures/diy.svg";
import teknologi from "../../assets/pictures/teknologi.svg";
import pets from "../../assets/pictures/pets.svg";
import travel from "../../assets/pictures/travel.png";

const CategoryList = ({ additional }) => {
  return (
    <div className={`flex flex-row flex-wrap ${additional}`}>
      <CategoryItem image={teknologi} bgColor="#E1C3A7" title="Elektronik" />
      <CategoryItem image={pets} bgColor="#FFB800" title="Peliharaan" />
      <CategoryItem image={diy} bgColor="#1602FC" title="DIY" />
      <CategoryItem image={travel} bgColor="#C345A0" title="Travel" />
    </div>
  );
};

export default CategoryList;
