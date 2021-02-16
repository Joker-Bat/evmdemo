import React from "react";

import classes from "./ActionButtons.module.scss";

const ActionButtons = (props) => {
  return (
    <div className={classes.ActionButtons}>
      <button className={classes.ResetButton}>Reset</button>
      <button className={classes.ResultButton}>Result</button>
    </div>
  );
};

export default ActionButtons;
