import React from "react";
import classes from "./app.module.css";
import Rocket from "../../objects/rocket";
import { MeteoriteOne } from "../../objects/meteorite";
import MeteoriteContainer from "../MeteoriteContainer";

function App() {
  return (
    <div className={classes.App}>
      <Rocket />
      <MeteoriteContainer />
    </div>
  );
}

export default App;
