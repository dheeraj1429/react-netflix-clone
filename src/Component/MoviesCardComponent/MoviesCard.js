import React from "react";
import MoviesCardSm from "./MoviesCardSm/MoviesCardSm";

import { useSelector, useDispatch } from "react-redux";

import "./MoviesCard.css";

function MoviesCard() {
  const selector = useSelector((state) => state.data.data);

  let FilterMoviesCard;
  if (selector) {
    FilterMoviesCard = selector.results.filter((el, idx) => idx < 12);
  }

  return (
    <div className="MoviesCardComponent">
      <div className="Container">{selector ? FilterMoviesCard.map(({ id, ...otherProps }) => <MoviesCardSm {...otherProps} />) : null}</div>
    </div>
  );
}

export default MoviesCard;
