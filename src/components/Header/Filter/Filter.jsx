import React from "react";
import classes from "./Filter.module.css";
import Select from "../../Utilities/Select";
import { GrPowerReset } from "react-icons/gr";

const FILTER_OPTIONS = {
  location: ["Location", "India", "USA", "Australia", "Singapore"],
  type: ["Type", "House", "Apartment", "Villa", "Bungalow"],
  price: ["Price", "10-20 Lakh", "20-30 Lakh", "30-40 Lakh", "40-50 Lakh"],
  area: ["Area", "8x10 m2", "10x10 m2", "12x10 m2", "14x10 m2"],
  bhk: ["BHK", "1 BHK", "2 BHK", "3 BHK", "4 BHK"],
};

const DATA = {
  location: "Location",
  type: "Type",
  price: "Price",
  area: "Area",
  bhk: "BHK",
};

const Filter = (props) => {
  /*Maintaining local state for the filter */
  const [data, setData] = React.useState(DATA);

  function changeOptionHandler(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  /*reset the data and also the main app state */
  function resetHandler() {
    setData(DATA);
    props.onChange(DATA);
  }

  return (
    <div className={classes.filter__section}>
      <div className={classes.filter__items}>
        {Object.keys(FILTER_OPTIONS).map((key, index) => (
          <div className={classes.filter__item} key={index}>
            <label className={classes.filter__label}>{key}</label>
            <Select
              name={key}
              className={classes.filter__select}
              value={data[key]}
              onChange={changeOptionHandler}
              options={FILTER_OPTIONS[key]}
            />
          </div>
        ))}
      </div>
      <GrPowerReset className={classes.reset} onClick={resetHandler} />
      <button
        className={classes.search__button}
        onClick={() => props.onChange(data)}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
