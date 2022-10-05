import React from "react";
import ReactDOM from "react-dom";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
  AiOutlineClose,
} from "react-icons/ai";
import { FaBed, FaBath } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import classes from "./Modal.module.css";
import { Carousel } from "react-responsive-carousel";

const Modal = ({ data, onClose }) => {
  React.useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        //Closing the modal on pressing escape
        onClose();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    //clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  //   console.log(data);
  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.modal__header}>
          <div className={classes.header__button}>Buy</div>
          <div className={classes.header__button}>Rent</div>
          <div className={classes.header__history}>
            <AiOutlineClockCircle className={classes.header__icon} />
            <p>5 Months Ago</p>
          </div>
          <div className={classes.header__views}>
            <AiOutlineEye className={classes.header__icon} />
            <p>250 Views</p>
          </div>
          <div className={classes.header__close} onClick={onClose}>
            <AiOutlineClose className={classes.header__icon} />
            <p>Close</p>
          </div>
        </div>
        <div className={classes.heading}>
          <h1 className={classes.heading__title}>{data.title}</h1>
          <div className={classes.heading__details}>
            <p className={classes.heading__address}>{data.address}</p>
            <div className={classes.heading__utilities}>
              <div className={classes.beds}>
                <FaBed className={classes.beds__icon} />
                <p>{data.bhk} Beds</p>
              </div>
              <div className={classes.baths}>
                <FaBath className={classes.baths__icon} />
                <p>{Number(data.bhk) + 1} Baths</p>
              </div>
              <div className={classes.area}>
                <BsArrowsMove className={classes.area__icon} />
                <p>
                  {data.area} m<sup>2</sup>
                </p>
              </div>
            </div>
            <p className={classes.price}>Rs. {data.price}</p>
          </div>
        </div>
        <div className={classes.modal__body}>
          <div className={classes.body__image}>
            <Carousel
              showThumbs={true}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              interval={3000}
            >
              {data.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="property" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={classes.body__description}>
            <div className={classes.description}>
              <h2 className={classes.description__heading}>Description</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore, sed dolorem temporibus similique veritatis
                consequatur reiciendis sunt, corrupti dolore iure, veniam
                molestiae quidem incidunt id delectus optio. Sequi rem optio
                tenetur nobis? Enim veniam reiciendis rerum, pariatur voluptate
                quos culpa modi repellat aliquam, ullam non dolorem nihil odio
                nostrum repudiandae.
              </p>
            </div>
            <div className={classes.contact__seller}>
              <h4 className={classes.contact__seller__heading}>
                Contact an Agent
              </h4>
              <div className={classes.agent__details__section}>
                <div className={classes.agent__image}>
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="agent"
                  />
                </div>
                <div className={classes.agent__details}>
                  <h5>Company Agent</h5>
                  <p className={classes.phone}>+(12) 324 567 89</p>
                  <p className={classes.email}>companyagent@email.com</p>
                </div>
              </div>
              <button type="button" className={classes.request__button}>
                Request details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
