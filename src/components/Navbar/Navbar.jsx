import React from "react";
import { IoHome } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import classes from "./Navbar.module.css";

function Navbar() {
  const [selectedTab, setSelectedTab] = React.useState("buy");

  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav__items}>
        <IoHome className={classes.nav__logo} />
        <li className={classes.heading}>DreamHouse</li>
        <li
          className={selectedTab === "buy" ? classes.selected : ""}
          onClick={() => setSelectedTab("buy")}
        >
          Buy
        </li>
        <li
          className={selectedTab === "rent" ? classes.selected : ""}
          onClick={() => setSelectedTab("rent")}
        >
          Rent
        </li>
        <li
          className={selectedTab === "projects" ? classes.selected : ""}
          onClick={() => setSelectedTab("projects")}
        >
          Projects
        </li>
        <li
          className={selectedTab === "blogs" ? classes.selected : ""}
          onClick={() => setSelectedTab("blogs")}
        >
          Blogs
        </li>
        <li
          className={selectedTab === "contact" ? classes.selected : ""}
          onClick={() => setSelectedTab("contact")}
        >
          Contact Us
        </li>
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
