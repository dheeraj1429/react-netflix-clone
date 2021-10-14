import { useEffect, useRef, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./Component/Navbar/Navbar";
import MoviPage from "./pages/MoviPage/MoviPage";
import SigIn from "./pages/SignIn/SigIn";

import { Route, Switch } from "react-router";

import { auth, createUserProfleDocument } from "./Component/Firebase.component/Firebase.utility";

import "./App.css";

function App() {
  const [User, setUser] = useState({
    currentUser: null,
    dataCollection: [],
  });

  useEffect(() => {
    const dataUserColletion = auth.onAuthStateChanged(async (userAuth) => {
      setUser({ currentUser: userAuth });

      // if (userAuth) {
      //   const userRef = await createUserProfleDocument(userAuth);
      //   userRef.onSnapshot((snap) => {
      //     console.log(snap);
      //     setUser({
      //       currentUser: {
      //         id: snap.id,
      //         name: snap.data().displayName,
      //         email: snap.data().email,
      //       },
      //     });
      //   });
      // }
    });
  }, []);

  return (
    <div className="App">
      <Navbar userData={User.currentUser} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie:Name" component={MoviPage} />
        <Route exact path="/SiginIn" component={SigIn} />
      </Switch>
    </div>
  );
}

export default App;
