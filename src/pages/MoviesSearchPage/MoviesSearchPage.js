import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../Component/CustomButton/CustomButton";

import "./MoviesSearchPage.css";

function MoviesSearchPage(props) {
  return (
    <div
      className="MovesSearchPageDiv"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${props.location.data.poster_path})`,
      }}
    >
      <div className="MoviesSearchContent">
        <h1>{props.location.data.title}</h1>
        <p>{props.location.data.overview}</p>
      </div>
    </div>
  );
}

export default MoviesSearchPage;
