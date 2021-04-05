import React from "react";
import Container from "./Container";
import Sidebar from "./Sidebar";

const PageWithSidebar = ({ background, children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <div className="pt-24 ml-0 lg:ml-100 px-12">{children}</div>
    </div>
  );
};

PageWithSidebar.defaultProps = {
  background: true,
};

export default PageWithSidebar;
