import React from "react";
import Card from "../components/Card";
import "./Cardlist.css";
import { instaUsers } from "../instausers";

const CardList = () => {
  return (
    <div className="card-list">
      <Card
        id={instaUsers[0].id}
        username={instaUsers[0].username}
        url={instaUsers[0].url}
      />
      <Card
        id={instaUsers[1].id}
        username={instaUsers[1].username}
        url={instaUsers[1].url}
      />
      <Card
        id={instaUsers[2].id}
        username={instaUsers[2].username}
        url={instaUsers[2].url}
      />
      <Card
        id={instaUsers[3].id}
        username={instaUsers[3].username}
        url={instaUsers[3].url}
      />
    </div>
  );
};

export default CardList;
