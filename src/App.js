import { useEffect, useRef, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./Component/Navbar/Navbar";
import MoviPage from "./pages/MoviPage/MoviPage";
import SigIn from "./pages/SignIn/SigIn";

import { Route, Switch } from "react-router";

import { auth, createUserProfileDocument } from "./Component/Firebase.component/Firebase.utility";

import "./App.css";
import MoviesSearchPage from "./pages/MoviesSearchPage/MoviesSearchPage";

function App() {
  const [User, setUser] = useState({
    currentUser: null,
    dataCollection: [],
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      createUserProfileDocument(userAuth);
      setUser({ currentUser: userAuth });
    });
  }, []);

  return (
    <div className="App">
      <Navbar userData={User.currentUser} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie:Name" component={MoviPage} />
        <Route exact path="/SiginIn" component={SigIn} />
        <Route exact path="/movie/Search:Name" component={MoviesSearchPage} />
      </Switch>
    </div>
  );
}

export default App;
