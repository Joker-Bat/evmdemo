import React from "react";

// Data file
import data from "../../../data/data";

import classes from "./ElectorList.module.scss";
import Elector from "../Elector/Elector";

const ElectorList = (props) => {
  return (
    <div className={classes.ElectorList}>
      {data.map((elector, index) => {
        return (
          <Elector
            key={index}
            partyName={elector.partyName}
            partyLeaderNameThamizh={elector.partyLeaderNameThamizh}
            partyLeaderNameEnglish={elector.partyLeaderNameEnglish}
            png={elector.logoPng}
            webp={elector.logoWebp}
          />
        );
      })}
    </div>
  );
};

export default ElectorList;
