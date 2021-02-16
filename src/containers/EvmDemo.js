import React, { Component } from "react";

import ElectorListContainer from "../components/ElectorListContainer/ElectorListContainer";
import Aux from "../hoc/aux/Aux";

class EvmDemo extends Component {
  render() {
    return (
      <Aux>
        <ElectorListContainer />
      </Aux>
    );
  }
}

export default EvmDemo;
