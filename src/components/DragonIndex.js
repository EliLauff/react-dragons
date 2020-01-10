import React from "react";
import { DragonsAtWar } from "./DragonsAtWar";
import { DragonsAtHome } from "./DragonsAtHome";

export default class DragonIndex extends React.Component {
  state = {
    dragonsAtHome: [],
    dragonsAtWar: []
  };

  componentDidMount() {
    //this is where we want to fetch
    fetch("http://localhost:3001/dragons")
      .then(res => res.json())
      .then(dragons =>
        this.setState({
          dragonsAtHome: dragons.filter(dragon => !dragon.atWar),
          dragonsAtWar: dragons.filter(dragon => dragon.atWar)
        })
      );
  }

  toggleAtWar = clickedDragon => {
    if (clickedDragon.atWar) {
      this.setState({
        dragonsAtHome: [
          ...this.state.dragonsAtHome,
          { ...clickedDragon, atWar: false }
        ],
        dragonsAtWar: this.state.dragonsAtWar.filter(
          dragon => dragon !== clickedDragon
        )
      });
    } else {
      this.setState({
        dragonsAtWar: [
          ...this.state.dragonsAtWar,
          { ...clickedDragon, atWar: true }
        ],
        dragonsAtHome: this.state.dragonsAtHome.filter(
          dragon => dragon !== clickedDragon
        )
      });
    }
    this.persistAtWarToggle(clickedDragon);
  };

  persistAtWarToggle = dragon => {
    fetch(`http://localhost:3001/dragons/${dragon.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        atWar: !dragon.atWar
      })
    });
  };

  render() {
    return (
      <div>
        <h1>React Dragons</h1>
        <DragonsAtHome
          toggleAtWar={this.toggleAtWar}
          dragons={this.state.dragonsAtHome}
        />
        <DragonsAtWar
          toggleAtWar={this.toggleAtWar}
          dragons={this.state.dragonsAtWar}
        />
      </div>
    );
  }
}
