import React from "react";
import TextTransition, { presets } from "react-text-transition";
import classes from "./Text.module.css";

const TEXTS = ["Houses", "Apartments", "Villas", "Bungalows"];

export default function Text() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={classes.heading}>
      <pre>Buy</pre>
      <TextTransition springConfig={presets.wobbly}>
        <h1>{TEXTS[index % TEXTS.length]}</h1>
      </TextTransition>
      <pre> at best price</pre>
    </div>
  );
}
