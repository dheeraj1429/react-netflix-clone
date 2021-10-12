import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./Component/Navbar/Navbar";
import MoviPage from "./pages/MoviPage/MoviPage";
import SigIn from "./pages/SignIn/SigIn";

import { Route, Switch } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie:Name" component={MoviPage} />
        <Route exact path="/SiginIn" component={SigIn} />
      </Switch>
    </div>
  );
}

export default App;
