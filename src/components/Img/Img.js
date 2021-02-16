import React from "react";

const Img = (props) => {
  return (
    <picture>
      <source srcSet={props.webp} type="image/webp" />
      <source srcSet={props.png} type="image/png" />
      <img src={props.png} alt="image" className={props.class} />
    </picture>
  );
};

export default Img;
