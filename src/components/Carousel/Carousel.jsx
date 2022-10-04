import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Car(props) {
  // console.log(props.images);

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      interval={
        /*random number between 1500 and 3000*/
        Math.floor(Math.random() * (3000 - 1500 + 1) + 1500)
      }
    >
      {props.images.map((image, index) => {
        return (
          <div key={index} className={props.className}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default Car;
