import React from "react";

import classes from "./ResultPage.module.scss";
import data from "../../data/data";
import Img from "../Img/Img";
import { GrClose } from "react-icons/gr";

const ResultPage = (props) => {
    // Add Active class to toggle view

  return (
    <div className={classes.ResultPage}>
      <GrClose />
      <Img png={data[0].logoPng} webp={data[0].logoWebp} class={classes.Logo} />
      <h3 lang="ta">2021 சட்டமன்ற தேர்தலில்</h3>
      <h1 className={classes.PartyName}>{data[0].partyName}</h1>
      <h3 lang="ta">வெற்றி பெற்றது.</h3>
      <h2 lang="ta" className={classes.TotalVote}>
        மொத்த வாக்குகள் : <span>10,000,000</span>
      </h2>
      <p className={classes.Author}>
        Desingned and build with 💙 by Shanmugam M
      </p>
    </div>
  );
};

export default ResultPage;
