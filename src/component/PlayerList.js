import React from "react";
import Player from "./Player";
import Players from "../players";

function PlayerList() {
  return (
    <>
    
      {Players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </>
  );
}

export default PlayerList;
