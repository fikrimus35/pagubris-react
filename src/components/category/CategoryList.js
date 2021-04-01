import React from "react";
import CategoryItem from "./CategoryItem";
import edukasi from "../../assets/pictures/edukasi.svg";
import diy from "../../assets/pictures/diy.svg";
import teknologi from "../../assets/pictures/teknologi.svg";
import pets from "../../assets/pictures/pets.svg";

const CategoryList = ({additional}) => {
  return (
    <div className={`flex flex-row flex-wrap justify-around ${additional} w-10/12`}>
      <CategoryItem image={teknologi}  bgColor="#E1C3A7"/>
      <CategoryItem image={pets}  bgColor="#FFB800"/>
      <CategoryItem image={diy} bgColor="#1602FC" />
      <CategoryItem image={edukasi}  bgColor="#90FD3A"/>
      <CategoryItem image={edukasi}  bgColor="#90FD3A"/>
      <CategoryItem image={edukasi}  bgColor="#90FD3A"/>
    </div>
  );
};

export default CategoryList;
