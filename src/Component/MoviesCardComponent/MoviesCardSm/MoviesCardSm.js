import React from "react";
import { Link } from "react-router-dom";

import "./MoviesCardSm.css";

function MoviesCardSm({ original_title, overview, poster_path, release_date }) {
  return (
    <Link
      to={{
        pathname: `movie:${original_title.replaceAll(" ", "_").toLowerCase()}`,
        data: {
          original_title,
          overview,
          poster_path,
          release_date,
        },
      }}
    >
      <div
        className="Card"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${poster_path})`,
        }}
      ></div>
    </Link>
  );
}

export default MoviesCardSm;
