import React from "react";
import CategoryList from "../components/category/CategoryList";
import PageWithSidebar from "../components/PageWithSidebar";

const Category = () => {
  return (
    <PageWithSidebar background = {false}>
      <h2 className="text-2xl font-bold">Kategori</h2>
      <CategoryList additional = "mt-4"/>
    </PageWithSidebar>
  );
};

export default Category;