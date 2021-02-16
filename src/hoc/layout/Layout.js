import React from "react";

import classes from "./Layout.module.scss";
import Img from "../../components/Img/Img";
import data from "../../data/data";
import Header from "../../components/Header/Header";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      {/* Testing */}
      {/* {data.map((item) => {
        return <Img png={item.logoPng} webp={item.logoWebp} />;
      })} */}
      {props.children}
    </div>
  );
};

export default Layout;
