import meteorite1 from "./assets/meteorite.png";
import fire1 from "./assets/fire.png";
import classes from "./style.module.scss";
import { useEffect, useState } from "react";
import { start } from "repl";

interface Iprops {
  startPosition: any;
  endPosition: any;
}

const MeteoriteOne = ({ startPosition, endPosition }: Iprops) => {
  const deg = () => {
    const initial = -42;
    let data = {
      x: position.right,
      y: position.top,
      z: Math.sqrt((position.right ^ 2) + (position.top ^ 2)),
    };

    return initial + Math.asin(data.x / data.z);
  };
  const [position, setPosition] = useState({
    top: startPosition.top,
    right: startPosition.right,
    transform: `rotate(${deg()}deg)`,
  });

  useEffect(() => {
    setPosition((prev) => ({
      ...prev,
      top: endPosition.top,
      right: endPosition.right,
    }));
  }, []);

  return (
    <div className={classes.ObjectMeteorite} style={position}>
      <img src={fire1} alt={"fire"} className={classes.Fire} />
      <img src={meteorite1} alt={"meteorite"} className={classes.Meteorite} />
    </div>
  );
};

export { MeteoriteOne };
