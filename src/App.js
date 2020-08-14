import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game/Game";
import raccoonspic from "./components/assets/images/raccoon.png";
import squirrelspic from "./components/assets/images/squirrel.png";
import houndspic from "./components/assets/images/hound.png";
import bunniespic from "./components/assets/images/bunny.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoonspic,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrelspic,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunniespic,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: houndspic,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
