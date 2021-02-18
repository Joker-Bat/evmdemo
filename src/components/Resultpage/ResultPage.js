import React, { useContext, memo } from "react";

import classes from "./ResultPage.module.scss";
import data from "../../data/data";
import Img from "../Img/Img";
import { GrClose } from "react-icons/gr";

import AuthContext from "../../assets/state/AuthContext";

const ResultPage = (props) => {
  // Add Active class to toggle view

  const Context = useContext(AuthContext);

  const wonParty = Context.wonPartyDetails;

  const styles = [classes.ResultPage];

  if (Context.hasResult) {
    styles.push(classes.Active);
  }

  // Won Elector party and Vote count
  // const partyName = Context.wonPartyDetails.partyName;
  const voteCount = Context.wonPartyDetails.voteCount;

  return (
    <div className={styles.join(" ")}>
      <div onClick={Context.result}>
        <GrClose />
      </div>
      <Img
        png={wonParty.partyLogo.png}
        webp={wonParty.partyLogo.webp}
        class={classes.Logo}
      />
      <h3 lang="ta">2021 சட்டமன்ற தேர்தலில்</h3>
      <h1 className={classes.PartyName}>{wonParty.partyName}</h1>
      <h3 lang="ta">வெற்றி பெற்றது.</h3>
      <h2 lang="ta" className={classes.TotalVote}>
        மொத்த வாக்குகள் : <span>{voteCount}</span>
      </h2>
      <p className={classes.Author}>
        Desingned and build with 💙 by Shanmugam M
      </p>
    </div>
  );
};

export default memo(ResultPage);
