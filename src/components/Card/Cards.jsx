import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";
import DummyData from "../../../DummyData";
import Text from "./TextTransition/Text";
import Modal from "../Modal/Modal";

const Cards = ({ location, type, price, area, bhk }) => {
  /*Extracting the data from main state to filter the cards */
  const filterStateData = {
    location: location,
    type: type,
    priceUpperValue: price.split(/-| /g)[1] + "00000",
    priceLowerValue: price.split(/-| /g)[0] + "00000",
    area: area.split(" ")[0],
    bhk: bhk.split(" ")[0],
  };

  // console.log(filterStateData);

  /*Filter the dummy data */
  const filteredData = DummyData.filter((data) => {
    return (
      (filterStateData.location === "Any" ||
        data.location === filterStateData.location) &&
      (filterStateData.type === "Any" || data.type === filterStateData.type) &&
      (price === "Any" ||
        (data.price >= filterStateData.priceLowerValue &&
          data.price <= filterStateData.priceUpperValue)) &&
      (area === "Any" || data.area === filterStateData.area) &&
      (bhk === "Any" || data.bhk === filterStateData.bhk)
    );
  });

  return (
    <>
      <div className={classes.hero}>
        <Text />
        {filteredData.length === 0 ? (
          <div className={classes.empty__list}>
            <p>Oops! The list seems Empty</p>
          </div>
        ) : (
          <div className={classes.cards__section}>
            {filteredData.map((item) => {
              return (
                <Card
                  key={item.id}
                  location={item.location}
                  type={item.type}
                  price={item.price}
                  title={item.title}
                  address={item.address}
                  bhk={item.bhk}
                  area={item.area}
                  featured={item.featured}
                  images={item.images}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
