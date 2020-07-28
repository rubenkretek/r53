import React from "react";
import Card from "../components/Card";
import "./Cardlist.css";

const CardList = ({ instaUsers }) => {
  return (
    <div className="card-list">
      {instaUsers.map((instaAccount, i) => {
        return (
          <Card
            key={i}
            id={instaUsers[i].id}
            username={instaUsers[i].username}
            url={instaUsers[i].url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
