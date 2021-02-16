import classes from "./App.module.scss";

import EvmDemo from "./containers/EvmDemo";
import Layout from "./hoc/layout/Layout";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Notification from "./components/Notification/Notification";
import ResultPage from "./components/Resultpage/ResultPage";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <EvmDemo />
      </Layout>
      <ActionButtons />
      <Notification />
      <ResultPage />
    </div>
  );
}

export default App;
