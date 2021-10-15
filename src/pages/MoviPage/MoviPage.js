import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./MoviPage.css";
import { Link } from "react-router-dom";

function MoviPage(props) {
  console.log(props);
  const [Title, setTitle] = useState("");
  const title = props.location.data.original_title;

  useEffect(() => {
    movieTrailer(title).then((res) => {
      console.log(res);
      const UrlPram = new URLSearchParams(new URL(res).search);
      setTitle(UrlPram.get("v"));
    });
  }, []);

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="MoviesShowpage">
      <Link to="/">
        <div className="BackButton">
          <i class="fas fa-arrow-left"></i>
        </div>
      </Link>

      <YouTube videoId={Title} opts={opts} className="youtubeVedio" />
    </div>
  );
}

export default MoviPage;
