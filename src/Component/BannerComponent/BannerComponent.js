import axios from "axios";
import React, { useState, useEffect } from "react";
import { setData } from "../../Redux/Action/action";
import { useSelector, useDispatch } from "react-redux";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./BannerComponent.css";

function BannerComponent() {
  const selector = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  const res = async () => {
    const data = await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${Math.floor(
          Math.random() * 100 + 1
        )}`
      )
      .catch((err) => console.log(err))
      .finally(console.log("done"));

    if (data) {
      dispatch(setData(data));
    }
  };

  let FilterBannerData;
  if (selector) {
    FilterBannerData = selector.results.filter((el, idx) => idx < 1);
  }

  console.log(FilterBannerData);

  useEffect(() => {
    res();
  }, []);

  return (
    <>
      {selector
        ? FilterBannerData.map((el) => (
            <div
              className="BannerComponent"
              style={{
                background: `url(https://image.tmdb.org/t/p/w1280${el.backdrop_path})`,
              }}
            >
              <div className="FirentDiv">
                <div className="bannerContent">
                  <h1>{el.title}</h1>
                  <p>{el.overview}</p>
                  <div>
                    <p>{el.original_title}</p>
                    <p></p>
                    <p>{el.release_date}</p>
                    <p>Duration: {el.vote_average}</p>
                    <button type="button" className="AddToWishlist">
                      Add to whish list <i class="fas fa-tag"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default BannerComponent;
