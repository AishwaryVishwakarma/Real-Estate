import React from "react";
import Building from "../../../assets/building.jpg";
import classes from "./Image.module.css";

const Image = (props) => {
  return (
    <div className={classes.image__section}>
      <div className={classes.image__container}>
        <img className={classes.building__image} src={Building} alt="" />
        {props.children}
      </div>
    </div>
  );
};

export default Image;
