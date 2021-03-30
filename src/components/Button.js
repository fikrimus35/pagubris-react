import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  link,
  bgColor,
  color,
  rounded,
  text,
  leftIcon,
  rightIcon,
  type,
  ...rest
}) => {
  if (link) {
    return (
      <Link
        className={`button bg-${bgColor} text-${color} rounded-full px-10 py-2 text-md`}
        {...rest}
        to={link}
      >
        {text}
      </Link>
    );
  }
  return (
    <button
      className={`button bg-${bgColor} text-${color} rounded-full px-10 py-2 text-md`}
      type={type}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
