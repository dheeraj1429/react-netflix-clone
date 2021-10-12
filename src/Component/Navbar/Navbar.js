import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Container">
        <div className="navDiv">
          <div className="firstDivNav">
            <Link to="/">
              <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" style={{ width: "100px" }} />
            </Link>
          </div>
          <div className="secondDivNav">
            <i class="fas fa-search"></i>
            <p>LOGIN</p>
            <Link to="/SiginIn">
              <button type="button" className="Signinbutton">
                SIGN IN
              </button>
            </Link>
            <div className="WishListData">
              <i class="far fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
