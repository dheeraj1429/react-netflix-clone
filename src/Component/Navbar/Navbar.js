import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../Firebase.component/Firebase.utility";

import "./Navbar.css";

function Navbar(props) {
  const selector = useSelector((state) => state.data.data);
  const [HideSearchDiv, setHideSearchDiv] = useState(false);
  const [SearchText, setSearchText] = useState("");

  let shortName;
  if (props.userData !== null) {
    const { displayName } = props.userData;
    shortName = displayName.split(",");
  }

  const SearchMoviesHandler = (event) => {
    setSearchText(event.target.value);
  };

  let filterMovieFuntion;
  if (selector) {
    filterMovieFuntion = selector.results.filter((el) => el.title.toLowerCase().includes(SearchText.toLowerCase()));
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
          {props.userData == null ? null : (
            <div className="searchDiv">
              {HideSearchDiv ? (
                <i
                  class="fas fa-times"
                  onClick={() => {
                    setHideSearchDiv(false);
                    setSearchText("");
                  }}
                ></i>
              ) : (
                <i class="fas fa-search" onClick={() => setHideSearchDiv(true)}></i>
              )}

              <input
                type="search"
                placeholder="Search Movies"
                className={!HideSearchDiv ? "search hideSearch" : "search"}
                value={SearchText}
                onChange={SearchMoviesHandler}
              ></input>

              {SearchText == "" ? null : (
                <div className="SearchDivContaienr">
                  {selector
                    ? filterMovieFuntion.map(({ title, overview, poster_path, original_language, original_title, vote_average, vote_count }) => (
                        <Link
                          to={{
                            pathname: `/movie/Search:${title.toLowerCase().replaceAll(" ", "_")}`,
                            data: {
                              title,
                              overview,
                              poster_path,
                              original_language,
                              original_title,
                              vote_average,
                              vote_count,
                            },
                          }}
                        >
                          <div className="MoviesCard" key={title} onClick={() => setSearchText("")}>
                            <div
                              className="MoviShortImg"
                              style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
                              }}
                            ></div>
                            <div className="MoviContent">
                              <p>{title}</p>
                              <p className="AboutMovi">{overview.slice(1, 150)}</p>
                            </div>
                          </div>
                        </Link>
                      ))
                    : null}
                </div>
              )}
            </div>
          )}

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
