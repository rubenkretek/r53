import React from "react";
import igImage from "../assets/ig-image.png";

const Card = ({ username, url }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="ig-image">
          <img src={igImage} alt="instagram" />
        </div>
        <div className="ig-handle">
          <h2>@{username}</h2>
        </div>
        <div className="ig-button">
          <a href={`https://${url}`} target="_blank" rel="noopener noreferrer">
            <button>Follow</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
