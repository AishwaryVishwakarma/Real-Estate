import React from "react";
import { IoHome } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav__items}>
        <IoHome className={classes.nav__logo} />
        <li className={classes.heading}>DreamHouse</li>
        <li>Buy</li>
        <li>Rent</li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>Contact Us</li>
        <div className={classes.searchbox}>
          <input type="text" placeholder="Search" />
          <BiSearch />
        </div>
        <button className={classes.login__button}>LogIn</button>
      </ul>
    </nav>
  );
}

export default Navbar;
