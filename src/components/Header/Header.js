import React from "react";

import classes from "./Header.module.scss";
import logoPng from "../../assets/images/TN_logo.png";
import logoWebp from "../../assets/images/TN_logo.webp";
import Img from "../../components/Img/Img";
import Light from "../../components/Light/Light";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Ready}>
        <h1 className={classes.Title}>Ready</h1>
        <Light />
      </div>
      <Img png={logoPng} webp={logoWebp} class={classes.Logo} />
    </div>
  );
};

export default Header;
