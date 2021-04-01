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
  additional,
  px,
  py,
  ...rest
}) => {
  if (link) {
    return (
      <Link
        className={`button bg-${bgColor} text-${color} rounded-full px-${px} py-${py} text-md flex flex-row items-center space-x-2  ${additional}`}
        {...rest}
        to={link}
      >
        {leftIcon && <img src={leftIcon} className="w-5 h-5" />}
        <span>{text}</span>
        {rightIcon && <img src={rightIcon} className="w-5 h-5" />}
      </Link>
    );
  }
  return (
    <button
      className={`button bg-${bgColor} text-${color} rounded-full px-${px} py-${py} text-md flex flex-row items-center space-x-2 my-2 ${additional}`}
      type={type}
      {...rest}
    >
      {leftIcon && <img src={leftIcon} className="w-5 h-5" />}
      <span>{text}</span>
      {rightIcon && <img src={rightIcon} className="w-5 h-5" />}
    </button>
  );
};

Button.defaultProps = {
  px: 10,
  py: 2,
};

export default Button;
