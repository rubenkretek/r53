import React from "react";
import igImage from "../assets/ig-image.png";

export const InstaMinis = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Your Minis</h1>
      </div>
      <div className="cardList">
        <div className="card">
          <div className="ig-image">
            <img src={igImage} alt="instagram" />
          </div>
          <div className="ig-handle">
            <h2>@rubenkretek</h2>
          </div>
          <div className="ig-button">
            <a href="https://www.instagram.com/rubenkretek/">
              <button>Follow</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
