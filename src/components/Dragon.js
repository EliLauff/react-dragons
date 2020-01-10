import React from "react";

export const Dragon = props => {
  const { dragon, toggleAtWar } = props;
  const { name, description, image } = dragon;
  return (
    <div onClick={() => toggleAtWar(dragon)}>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <img style={{ width: 400 }} src={image} alt={"a dragon"}></img>
    </div>
  );
};
