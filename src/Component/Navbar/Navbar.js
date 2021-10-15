import React, { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../Firebase.component/Firebase.utility";

import "./Navbar.css";

function Navbar(props) {
  const [ShowNavbar, setShowNavbar] = useState(false);
  let shortName;
  if (props.userData !== null) {
    const { displayName } = props.userData;
    shortName = displayName.split(",");
  }

  return (
    <div className="navbar">
      <div className="Container">
        <div className="navDiv">
          <div className="firstDivNav">
            <Link to="/">
              <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" style={{ width: "100px" }} />
            </Link>
          </div>
          <div className="searchDiv">
            <i class="fas fa-search" onClick={() => setShowNavbar(true)}></i>
            {ShowNavbar == true ? <input type="search" placeholder="Search Movies" className="search"></input> : null}
          </div>

          {!props.userData ? (
            <div className="secondDivNav">
              <p>LOGIN</p>
              <Link to="/SiginIn">
                <button type="button" className="Signinbutton">
                  SIGN IN
                </button>
              </Link>
            </div>
          ) : (
            <div className="secondDivNav">
              <i class="fas fa-search"></i>
              <Link to="/SiginIn">
                <button type="button" className="Signinbutton" onClick={() => auth.signOut()}>
                  Log out
                </button>
              </Link>
              <p>{shortName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
