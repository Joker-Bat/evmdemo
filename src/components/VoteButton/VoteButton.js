import React, { useContext } from "react";

import classes from "./VoteButton.module.scss";
import AuthContext from "../../assets/state/AuthContext";

const VoteButton = (props) => {
  const ContextAPI = useContext(AuthContext);
  const voted = ContextAPI.clicked;

  return (
    <button
      className={classes.VoteButton}
      onClick={() => voted(props.link)}
    ></button>
  );
};

export default VoteButton;
