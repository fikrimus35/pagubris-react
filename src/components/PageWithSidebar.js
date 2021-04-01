import React from "react";
import Container from "./Container";
import Sidebar from "./Sidebar";

const PageWithSidebar = ({ background, children }) => {
  return (
    <Container direction="row" padding="0% 7%" additional={background && "bg-auth"}>
      <Sidebar />
      <div className="w-9/12 h-screen mt-24" style={{ marginLeft: "35%" }}>
        {children}
      </div>
    </Container>
  );
};

PageWithSidebar.defaultProps = {
  background: true
}

export default PageWithSidebar;
