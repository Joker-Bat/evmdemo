import React from "react";


import classes from "./Notification.module.scss"

const Notification = () => {
  return (
    <div className={[classes.Notification, classes.Active].join(' ')}>
      <p>Already vote count is empty</p>
    </div>
  );
};

export default Notification;
