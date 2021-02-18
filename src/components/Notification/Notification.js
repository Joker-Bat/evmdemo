import React, { useContext } from "react";

import classes from "./Notification.module.scss";

import AuthContext from "../../assets/state/AuthContext";

const Notification = () => {
  const Context = useContext(AuthContext);
  const message = Context.shortMessage;

  const styles = [classes.Notification];
  if (message) {
    styles.push(classes.Active);
  }

  return (
    <div className={styles.join(" ")}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
