import React from "react";
import "./App.css";
import Game from "./game/Game";
import raccoon from "./assessts/raccoon.png";
import squirrel from "./assessts/squirrel.png";
import bunny from "./assessts/bunny.png";
import hound from "./assessts/hound.png";

function App() {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoon,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrel,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunny,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: hound,
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
