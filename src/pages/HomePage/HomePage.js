import React from "react";
import BannerComponent from "../../Component/BannerComponent/BannerComponent";
import MoviesCard from "../../Component/MoviesCardComponent/MoviesCard";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <BannerComponent />
      <MoviesCard />
    </div>
  );
}

export default HomePage;
