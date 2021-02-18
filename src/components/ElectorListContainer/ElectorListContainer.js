import React from "react";

import classes from "./ElectorListContainer.module.scss";
import ElectorList from "./ElectorList/ElectorList";

const ElectorListContainer = (props) => {
  return (
    <div className={classes.ElectorListContainer}>
      <ElectorList />
    </div>
  );
};

export default ElectorListContainer;
