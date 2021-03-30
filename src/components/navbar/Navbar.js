import React from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import logo from "../../assets/pictures/logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ list }) => {
  return (
    <div
      style={{ padding: "1% 7%" }}
      className="z-10 flex flex-col lg:flex-row bg-white"
    >
      <Link to="/">
        <NavLogo image={logo} imageTitle="logo pagubris" />
      </Link>
      <NavList list={list} />
    </div>
  );
};

export default Navbar;