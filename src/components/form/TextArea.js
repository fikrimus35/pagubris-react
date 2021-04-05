import React from "react";

const TextArea = ({ rounded, bgColor, width, height, shadow, placeholder, ...rest }) => {
  return (
    <textarea
      className={`w-${width} h-${height} bg-${bgColor} rounded-${rounded} shadow-${shadow} px-8 py-4`}
      placeholder={placeholder}
      {...rest}
    ></textarea>
  );
};

export default TextArea;
