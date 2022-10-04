import React from "react";

const Option = (props) => {
  return (
    <>
      {props.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </>
  );
};

export default Option;
