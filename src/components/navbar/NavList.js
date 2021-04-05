import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userActions";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const NavList = ({ list, menuVisible, mobile, setMenuVisible }) => {
  const dispatch = useDispatch();
  const variants = {
    hidden: {
      left: "-100%",
      opacity: 0,
    },
    visible: {
      left: "0",
      opacity: 1,
    },
  };

  return (
    <motion.ul
      variants={variants}
      animate={menuVisible ? "visible" : "hidden"}
      className={`list-none ${
        mobile ? "absolute" : "relative"
      } flex flex-col lg:flex-row mx-auto lg:ml-auto lg:mr-0 justify-around ${
        mobile ? "w-full bg-white mt-16 nav" : "w-6/12"
      } text-center`}
    >
      {list.map((navItem, id) => {
        if (navItem.name === "Login") {
          return (
            <li
              key={id}
              className="py-4 px-2 text-lg"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <Link
                to={navItem.link}
                className="linimasa px-8 py-2 text-white font-bold rounded-full"
              >
                {navItem.name}
              </Link>
            </li>
          );
        } else if (navItem.name === "Logout") {
          return (
            <li
              key={id}
              className="py-4 px-2 text-lg cursor-pointer"
              onClick={() => {
                dispatch(logout());
                setMenuVisible(!menuVisible);
              }}
            >
              {navItem.name}
            </li>
          );
        } else {
          return (
            <li
              key={id}
              className="py-4 px-2 text-lg"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
          );
        }
      })}
    </motion.ul>
  );
};

export default NavList;
