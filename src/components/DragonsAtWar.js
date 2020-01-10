import React from "react";
import { Dragon } from "./Dragon";

export const DragonsAtWar = props => {
  return (
    <div
      style={{
        float: "right",
        width: "50%",
        backgroundColor: "#fa9a93",
        height: "100vh"
      }}
    >
      <h2>Dragons at War</h2>
      {props.dragons.map(dragon => (
        <Dragon toggleAtWar={props.toggleAtWar} dragon={dragon} />
      ))}
    </div>
  );
};
