import React, { Component } from "react";

import classes from "./App.module.scss";

import Layout from "./hoc/layout/Layout";
import ElectorListContainer from "./components/ElectorListContainer/ElectorListContainer";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Notification from "./components/Notification/Notification";
import ResultPage from "./components/Resultpage/ResultPage";
// ContextAPI
import AuthContext from "./assets/state/AuthContext";
import data from "./data/data";

const getPartyNames = data.map((elector) => elector.partyShortName);

const partyNames = {}; // {ntk: 0, mnm: 0 ...}
const partyVoteClick = {}; //{ntk: false, mnm: false ...}

const wonPartyDetails = {
  partyName: "",
  partyLogo: {
    png: null,
    webp: null,
  },
  voteCount: 0,
};

getPartyNames.forEach((elector, index) => {
  partyNames[elector] = 0;
  partyVoteClick[elector] = false;
});

class App extends Component {
  state = {
    partyVoteCount: partyNames,
    partyVoteClick,
    hasResult: false,
    totalCount: 0,
    isReady: false,
    isReadyLight: false,
    shortMessage: "",
    wonPartyDetails,
  };

  componentDidMount() {
    this.readyLightTrue = setTimeout(() => {
      this.setState({ isReadyLight: true });
    }, 1000);
    this.readyLightFalse = setTimeout(() => {
      this.setState({ isReadyLight: false });
    }, 3000);
    this.ready = setTimeout(() => {
      this.setState({ isReady: true });
    }, 3000);
  }

  shortMessage = (msg) => {
    this.setState({ shortMessage: msg });

    this.shortMessageTimer = setTimeout(() => {
      this.setState({ shortMessage: "" });
    }, 2000);
  };

  getTotalVoteCount = () => {
    const voteList = { ...this.state.partyVoteCount };
    const totalCount = Object.values(voteList).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    return totalCount;
  };

  voteClickHandler = (link) => {
    const voteClicked = { ...this.state.partyVoteClick };
    const voteCount = { ...this.state.partyVoteCount };
    if (this.state.isReady) {
      voteClicked[link] = true;
      voteCount[link] += 1;
      this.shortMessage("Your vote is added");

      this.setState((prevState) => {
        return {
          partyVoteClick: voteClicked,
          partyVoteCount: voteCount,
          totalCount: prevState.totalCount + 1,
        };
      });
      this.voteClickTimer = setTimeout(() => {
        voteClicked[link] = false;
        this.setState({ partyVoteClick: voteClicked });
      }, 1200);
    } else {
      this.shortMessage("Wait for EVM to Ready");
    }
  };

  toggleResult = () => {
    this.setState((prevState) => {
      return { hasResult: !prevState.hasResult };
    });

    this.winnerElector();
  };

  emptyVoteList = () => {
    this.shortMessage("Vote count is empty! Vote first :)");
  };

  winnerElector = () => {
    const ElectorList = { ...this.state.partyVoteCount };
    const voteCount = Object.values(ElectorList);
    const wonPartyNameLogo = data.map((elector) => {
      return [elector.partyName, elector.logoPng, elector.logoWebp];
    });

    const fullPartyName = [],
      logoPng = [],
      logoWebp = [];

    wonPartyNameLogo.forEach((item, index) => {
      fullPartyName.push(item[0]);
      logoPng.push(item[1]);
      logoWebp.push(item[2]);
    });

    const maxCount = Math.max(...voteCount);
    const maxIndex = voteCount.indexOf(Math.max(...voteCount));
    const wonPartyName = fullPartyName[maxIndex];
    const wonPartyLogo = {
      png: logoPng[maxIndex],
      webp: logoWebp[maxIndex],
    };

    const wonParty = { ...this.state.wonPartyDetails };
    wonParty.partyName = wonPartyName;
    wonParty.partyLogo = wonPartyLogo;
    wonParty.voteCount = maxCount;

    this.setState({ wonPartyDetails: wonParty });
  };

  resetVoteCount = () => {
    this.setState({ partyVoteCount: partyNames, totalCount: 0 });
    this.shortMessage("Vote count has been empty!");
  };

  componentWillUnmount() {
    clearTimeout(this.readyLightTrue);
    clearTimeout(this.readyLightFalse);
    clearTimeout(this.ready);
    clearTimeout(this.shortMessageTimer);
    clearTimeout(this.voteClickTimer);
  }

  render() {
    // console.log(this.winnerElector());
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          clicked: this.voteClickHandler,
          result: this.toggleResult,
          emptyVoteList: this.emptyVoteList,
          reset: this.resetVoteCount,
        }}
      >
        <div className={classes.App}>
          <Layout>
            <ElectorListContainer />
          </Layout>
          <ActionButtons />
          <Notification />
          <ResultPage />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
