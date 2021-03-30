import React from "react";

const TextArea = ({
  text,
  rounded,
  bgColor,
  color,
  iconLeft,
  iconRight,
  type,
}) => {
  return (
    <input
      type={type}
      className={`rounded-${rounded} bg-${bgColor} text-${color}`}
    />
  );
};

export default TextArea;
