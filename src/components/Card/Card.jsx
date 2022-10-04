import React from "react";
import classes from "./Card.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import Caruosel from "../Carousel/Carousel";
import Tilt from "react-parallax-tilt";

function Card(props) {
  /*Add commas to price*/
  const price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      style={{
        width: "max-content",
      }}
    >
      <div className={classes.card}>
        <div className={classes.type}>{props.type}</div>
        <Caruosel className={classes.card__image} images={props.images} />
        <div className={classes.details}>
          <div className={classes.price__section}>
            <p>Rs. {price}</p>
            <AiOutlineHeart className={classes.heart} />
          </div>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.address}>{props.address}</p>
          <div className={classes.footer__section}>
            <div className={classes.bhk}>
              <BiBed className={classes.footer__logo} />
              <p>{props.bhk} BHK</p>
            </div>
            <div className={classes.area}>
              <BsArrowsMove className={classes.footer__logo} />
              <p>
                {props.area} m<sup>2</sup>
              </p>
            </div>
            {props.featured && <div className={classes.featured}>Featured</div>}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default React.memo(Card);
