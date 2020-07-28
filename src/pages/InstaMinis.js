import React from "react";
import CardList from "../containers/Cardlist";
import { instaUsers } from "../instausers";

export const InstaMinis = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Your Minis</h1>
      </div>
      <CardList instaUsers={instaUsers} />
    </React.Fragment>
  );
};
