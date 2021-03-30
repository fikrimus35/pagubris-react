import React from "react";

const Container = ({ center, children, padding, direction, additional }) => {
  return (
    <div
      className={`flex flex-col lg:flex-${direction}  ${
        center && "justify-center items-center"
      } relative ${additional}`}
      style={{ padding }}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  padding: "6% 7%",
  direction: "row",
};

export default Container;
