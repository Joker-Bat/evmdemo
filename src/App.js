import classes from "./App.module.scss";


import EVM from "./containers/EvmDemo";
import Layout from "./hoc/layout/Layout";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <EVM />
      </Layout>
    </div>
  );
}

export default App;
