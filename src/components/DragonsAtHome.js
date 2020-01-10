import React from "react";
import { Dragon } from "./Dragon";

export const DragonsAtHome = props => {
  return (
    <div
      style={{
        float: "left",
        width: "50%",
        backgroundColor: "#93b4fa",
        height: "100vh"
      }}
    >
      <h2>Dragons At Home</h2>
      {props.dragons.map(dragon => (
        <Dragon toggleAtWar={props.toggleAtWar} dragon={dragon} />
      ))}
    </div>
  );
};
