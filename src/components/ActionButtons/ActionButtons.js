import React, { useContext, memo } from "react";

import classes from "./ActionButtons.module.scss";

import AuthContext from "../../assets/state/AuthContext";

const ActionButtons = (props) => {
  const Context = useContext(AuthContext);

  const totalCount = Context.totalCount;

  return (
    <div className={classes.ActionButtons}>
      <button className={classes.ResetButton} onClick={Context.reset}>
        Reset
      </button>
      <button
        className={classes.ResultButton}
        onClick={totalCount !== 0 ? Context.result : Context.emptyVoteList}
      >
        Result
      </button>
    </div>
  );
};

export default memo(ActionButtons);
