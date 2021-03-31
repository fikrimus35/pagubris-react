import React from "react";

const TextField = ({
  rounded,
  bgColor,
  color,
  iconLeft,
  iconRight,
  placeholder,
  type,
  width,
  ...rest
}) => {
  return (
    <div>
      <input
        type={type}
        className={`rounded-${rounded} bg-${bgColor} text-${color} px-4 py-2 text-sm my-4 w-${width}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default TextField;
