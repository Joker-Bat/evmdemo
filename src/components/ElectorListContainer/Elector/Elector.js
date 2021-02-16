import React from "react";

import classes from "./Elector.module.scss";
import Light from "../../Light/Light";
import VoteButton from "../../VoteButton/VoteButton";
import Img from "../../Img/Img";

const Elector = (props) => {
  return (
    <div className={classes.Elector}>
      <div className={classes.Party}>
        <div className={classes.PartyDetails}>
          <h1 className={classes.PartyName}>{props.partyName}</h1>
          <h3 className={classes.PartyLeaderNameThamizh}>
            {props.partyLeaderNameThamizh}
          </h3>
          <h4 className={classes.PartyLeaderNameEnglish}>
            {props.partyLeaderNameEnglish}
          </h4>
        </div>
        <Img png={props.png} webp={props.webp} class={classes.Logo} />
      </div>
      <div className={classes.VoteButtonContainer}>
        <Light />
        <VoteButton />
      </div>
    </div>
  );
};

export default Elector;
