import React, { useContext, useEffect } from "react";

import classes from "./Light.module.scss";
import AuthContext from "../../assets/state/AuthContext";

const Light = (props) => {
  const Context = useContext(AuthContext);

  const styles = [classes.Light];

  if (Context.partyVoteClick[props.link]) {
    styles.push(classes.Active);
  }

  if (props.link === "ready" && Context.isReadyLight) {
    styles.push(classes.Active);
  }

  return <div className={styles.join(" ")}></div>;
};

export default Light;
