import classes from "./App.module.scss";

import EvmDemo from "./containers/EvmDemo";
import Layout from "./hoc/layout/Layout";
import ActionButtons from "./components/ActionButtons/ActionButtons"

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <EvmDemo />
      </Layout>
      <ActionButtons />
    </div>
  );
}

export default App;
