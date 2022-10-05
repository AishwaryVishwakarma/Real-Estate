import React from "react";
import "./App.css";
import Cards from "./components/Card/Cards";
import Header from "./components/Header/HEader";
import Navbar from "./components/Navbar/Navbar";

function App() {
  /*Maintaining main state for the filter */
  const [filter, setFilter] = React.useState({
    location: "Any",
    type: "Any",
    price: "Any",
    area: "Any",
    bhk: "Any",
  });

  function changeOptionHandler(data) {
    setFilter(data);
    // console.log(filter);
  }

  return (
    <>
      <Navbar />
      <Header onChange={changeOptionHandler} />
      <Cards
        location={filter.location}
        type={filter.type}
        price={filter.price}
        area={filter.area}
        bhk={filter.bhk}
      />
    </>
  );
}

export default App;
